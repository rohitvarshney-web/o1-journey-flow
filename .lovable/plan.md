
## What the error means (in plain English)

Your app is trying to download Google’s “API description” file for Google Sheets (the `$discovery/rest?version=v4` URL) during `gapi.client.init(...)`.

That request is being blocked with **403 Forbidden**, which usually happens for one of these reasons:
1) The **API key** you’re using is restricted/blocked for that specific Google service/method, or  
2) The **Sheets API** isn’t enabled (or not enabled in the exact Google Cloud project that issued that API key), or  
3) The key restrictions (HTTP referrers / API restrictions) don’t include your current Lovable preview/published domain.

However, in your current codebase, there’s an important detail:

- You are **not actually using GAPI for the Sheets append**.
- You append via a direct `fetch(...)` call with a **Bearer OAuth token**.
- So this “discovery doc” fetch is unnecessary, and it’s the thing failing.

## Root cause in this codebase

In `src/lib/googleSheets.ts`:
- `initializeGoogleAPI()` loads **GAPI** and calls:

  - `gapi.client.init({ apiKey, discoveryDocs: [...] })`

That triggers the failing request to:
- `https://content-sheets.googleapis.com/$discovery/rest?version=v4&...&key=...`

But later, when submitting, you do:
- `fetch("https://sheets.googleapis.com/v4/spreadsheets/.../append", { Authorization: Bearer ... })`

So the app can work without ever calling `gapi.client.init` (and without an API key).

## Proposed fix (recommended): remove GAPI dependency entirely

### Goal
Stop calling the discovery endpoint (so the 403 disappears) and rely only on:
- Google Identity Services (GIS) to get an access token
- Direct REST `fetch` to append to Sheets

### Implementation changes (high level)

1) **Update `src/lib/googleSheets.ts`**
   - Remove loading `https://apis.google.com/js/api.js` (GAPI) and remove `gapi.client.init(...)`.
   - Keep only loading `https://accounts.google.com/gsi/client` (GIS).
   - Make `initializeGoogleAPI()` resolve **only after** GIS is initialized and `tokenClient` is created (this also prevents `tokenClient` being undefined).
   - Remove the `API_KEY` constant entirely (since it won’t be needed).
   - Keep `CLIENT_ID`, `SHEET_ID`, and `SCOPES`.

2) **Update `appendToGoogleSheet()`**
   - Keep the current `fetch` append logic.
   - Ensure it calls the updated `initializeGoogleAPI()` (GIS-only) if not initialized.

3) **Update `src/components/ApplicationForm.tsx`**
   - Remove the explicit `await initializeGoogleAPI();` from `handleSubmit()` (optional but recommended), because `appendToGoogleSheet()` already ensures initialization.
   - Keep error handling/toast as-is (or slightly improve messaging later).

## Why this works

- The Google Sheets “append” endpoint works with an OAuth access token.
- It does not require the API discovery doc.
- It does not require an API key.
- By removing GAPI initialization, we eliminate the failing 403 request entirely.

## Edge cases / notes

- You still must have the correct OAuth Client ID configuration:
  - In Google Cloud Console → OAuth Client → “Authorized JavaScript origins”
  - Include:
    - Your Lovable Preview URL origin (the domain without path)
    - Your Published URL origin
- If the user’s Google account hasn’t granted access yet, they’ll see the consent popup on first submit.
- If consent is blocked because the OAuth consent screen is still in “Testing” mode, you must add the Google account as a test user.

## Testing checklist (end-to-end)

1) Open the site in the Lovable preview URL.
2) Open the form modal and submit.
3) Confirm you see a Google consent popup.
4) After accepting, confirm:
   - No more `$discovery/rest?... 403` in the console/network tab
   - A new row appears in the target Google Sheet.

## Optional next step (more robust, not required for this fix)

If you eventually want “no Google login popup for users” (fully server-side write), you’d move the Sheets append to a backend (Lovable Cloud / Supabase Edge Function) using a service account. That would require storing a private key securely and is a different architecture.

