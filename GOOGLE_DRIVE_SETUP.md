# Google Drive API Setup Instructions

To enable form submissions to save automatically to your Google Drive folder, follow these steps:

## 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Drive API** for your project

## 2. Create API Credentials

### Create an API Key:
1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **API Key**
3. Copy the API key and save it

### Create an OAuth 2.0 Client ID:
1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **OAuth client ID**
3. Select **Web application**
4. Add your application URLs to **Authorized JavaScript origins**:
   - For local development: `http://localhost:8080`
   - For production: Your production URL
5. Click **Create** and copy the **Client ID**

## 3. Configure OAuth Consent Screen

1. Go to **APIs & Services** > **OAuth consent screen**
2. Select **External** (or Internal if using Google Workspace)
3. Fill in the required information:
   - App name
   - User support email
   - Developer contact information
4. Add the following scope:
   - `https://www.googleapis.com/auth/drive.file`
5. Save and continue

## 4. Add Environment Variables

Create a `.env` file in the root of your project (copy from `.env.example`):

```env
VITE_GOOGLE_CLIENT_ID=your_client_id_here.apps.googleusercontent.com
VITE_GOOGLE_API_KEY=your_api_key_here
```

Replace the values with your actual credentials from step 2.

## 5. Test the Integration

1. Restart your development server
2. Fill out the application form
3. Click "Submit Application"
4. You'll be prompted to authorize the app to access your Google Drive
5. After authorization, the form data will be saved as an Excel file in your specified Google Drive folder

## Folder ID

The folder ID is already configured in the code: `1IXn-2CiLe1wDL3_XYKi8B1E4nAMCLsXO`

If you need to change it, update the `FOLDER_ID` constant in `src/lib/googleDrive.ts`.

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- API keys should be restricted to specific domains in production
- OAuth credentials should only allow authorized redirect URIs
