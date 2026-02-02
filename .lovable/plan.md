
# Plan: Upload Files to Google Drive and Store Link in Google Sheet

## Overview

When a user uploads their resume, the file will be uploaded to Google Drive and the resulting shareable link will be saved in the Google Sheet alongside other form data.

## Current State

- The upload button exists but has no functionality
- Form data is saved to Google Sheet via direct REST API with OAuth
- OAuth scope is currently only `spreadsheets` (no Drive access)

## Implementation

### 1. Update OAuth Scope

**File: `src/lib/googleSheets.ts`**

Add Google Drive scope to the existing OAuth configuration:

```typescript
// Change from:
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

// To:
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file';
```

The `drive.file` scope allows uploading files that the app creates (more limited/secure than full Drive access).

### 2. Create Google Drive Upload Function

**File: `src/lib/googleSheets.ts`**

Add new function to upload files to Google Drive:

```typescript
export const uploadToGoogleDrive = async (file: File): Promise<string> => {
  // 1. Ensure GIS is initialized
  // 2. Get access token
  // 3. Upload file using multipart upload to Google Drive API
  // 4. Make file publicly viewable
  // 5. Return the shareable link
};
```

The function will:
1. Use the same OAuth token already obtained for Sheets
2. Upload via `https://www.googleapis.com/upload/drive/v3/files`
3. Set file permissions to "anyone with link can view"
4. Return the web view link: `https://drive.google.com/file/d/{fileId}/view`

### 3. Update ApplicationForm Component

**File: `src/components/ApplicationForm.tsx`**

Add file upload handling:

1. Add a `useRef` for the hidden file input
2. Add state to track upload progress
3. Create `handleFileSelect` function that:
   - Gets the selected file
   - Calls `uploadToGoogleDrive(file)`
   - Stores the returned Drive link in `formData.resume`
   - Shows upload progress/success feedback

```typescript
const fileInputRef = useRef<HTMLInputElement>(null);
const [isUploading, setIsUploading] = useState(false);

const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;
  
  setIsUploading(true);
  try {
    const driveLink = await uploadToGoogleDrive(file);
    handleInputChange("resume", driveLink);
    toast({ title: "File uploaded!", description: "Resume uploaded to Google Drive" });
  } catch (error) {
    toast({ title: "Upload failed", variant: "destructive" });
  } finally {
    setIsUploading(false);
  }
};
```

4. Add hidden file input element:
```jsx
<input
  type="file"
  ref={fileInputRef}
  onChange={handleFileSelect}
  accept=".pdf,.doc,.docx"
  className="hidden"
/>
```

5. Connect upload button to trigger file picker:
```jsx
<Button 
  onClick={() => fileInputRef.current?.click()}
  disabled={isUploading}
>
  {isUploading ? <Loader2 className="animate-spin" /> : <Upload />}
</Button>
```

## Technical Details

### Google Drive Upload API Call

```typescript
// Multipart upload with metadata
const metadata = {
  name: file.name,
  mimeType: file.type,
};

const formData = new FormData();
formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
formData.append('file', file);

const response = await fetch(
  'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink',
  {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}` },
    body: formData,
  }
);

// Then set permissions for public viewing
await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ role: 'reader', type: 'anyone' }),
});
```

### Data Flow

```
User selects file → Upload to Google Drive → Get shareable link → Store in formData.resume → Submit form → Link saved to Google Sheet
```

## File Changes Summary

| File | Changes |
|------|---------|
| `src/lib/googleSheets.ts` | Add Drive scope, add `uploadToGoogleDrive` function |
| `src/components/ApplicationForm.tsx` | Add file input ref, upload state, `handleFileSelect` handler, connect upload button |

## User Experience

1. User clicks upload button
2. File picker opens (accepts PDF, DOC, DOCX)
3. User selects file
4. Google OAuth popup appears (if not already authorized)
5. Upload progress shown (button shows spinner)
6. On success: Drive link appears in the input field
7. User submits form
8. Google Sheet receives the Drive link in the resume column

## Requirements

You'll need to enable the **Google Drive API** in your Google Cloud Console (same project as Sheets API):
1. Go to https://console.cloud.google.com/apis/library/drive.googleapis.com
2. Click "Enable"

The OAuth consent screen already has the required configuration since we're using the same Client ID.
