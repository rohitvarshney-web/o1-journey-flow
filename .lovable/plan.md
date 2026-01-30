
# Plan: Google Sheets Direct Integration with User OAuth

## Overview

Modify the existing Google Drive integration to append form submissions as rows in a single Google Sheet instead of creating individual Excel files. Users will still authenticate via Google OAuth popup when submitting.

---

## How It Will Work

```text
User fills form --> Clicks Submit --> Google OAuth popup --> Data appends to Sheet
```

Each submission becomes a new row in your spreadsheet with all form fields as columns.

---

## Changes Required

### 1. Update `src/lib/googleDrive.ts`

**Rename to** `src/lib/googleSheets.ts` and modify:

- Change scope from `drive.file` to `spreadsheets` 
- Add discovery doc for Google Sheets API
- Replace `uploadToGoogleDrive` with `appendToGoogleSheet`
- Remove Excel file creation (no longer needed)
- Add function to append a row to a specific spreadsheet

**New configuration needed:**
- `VITE_GOOGLE_SHEET_ID` - The ID of your Google Sheet (from the URL)

### 2. Update `src/components/ApplicationForm.tsx`

- Import from new `googleSheets.ts` instead of `googleDrive.ts`
- Call `appendToGoogleSheet` instead of `uploadToGoogleDrive`
- Update success message

### 3. Update Environment Variables

Add to `.env.example`:
- `VITE_GOOGLE_SHEET_ID` - Your spreadsheet ID

---

## Technical Details

### Google Sheets API Scope
```
https://www.googleapis.com/auth/spreadsheets
```

### API Endpoint
```
POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:append
```

### Data Format
Form data will be mapped to columns in order:
| Name | Email | Phone | Country | Current Visa | Timeline | Resume | LinkedIn | Role Type | Qualifications | Awards | Associations | Media Coverage | Impactful Work | Scholarly Articles | Critical Role | Immigration Issues | Family in US | Submitted At |

### Sheet ID Location
From a Google Sheets URL like:
`https://docs.google.com/spreadsheets/d/1ABC123xyz/edit`
The Sheet ID is: `1ABC123xyz`

---

## Setup Requirements

Before this works, you'll need to:

1. **Create a Google Sheet** to store submissions
2. **Add header row** (optional - the function can work without it)
3. **Set the Sheet ID** in your environment variables
4. **Ensure your Google Cloud OAuth credentials** have Sheets API enabled

---

## Files to Modify

| File | Action |
|------|--------|
| `src/lib/googleDrive.ts` | Rename to `googleSheets.ts`, rewrite for Sheets API |
| `src/components/ApplicationForm.tsx` | Update imports and function calls |
| `.env.example` | Add `VITE_GOOGLE_SHEET_ID` |

---

## Benefits Over Current Approach

- All submissions in one spreadsheet (easier to manage)
- No need to download/open individual Excel files
- Real-time data in Google Sheets
- Can use Google Sheets formulas, filtering, sorting
- Easy to share with team members
