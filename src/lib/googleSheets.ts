const CLIENT_ID = '965326801387-clsh11jpj4c23huj7u9p9f4u2dj15cpf.apps.googleusercontent.com';
const SHEET_ID = '1WskGAV25nCtPmE-Bozp1vZGru6yquynwix3wamZ3PuM';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file';

let tokenClient: any;
let gisInitialized = false;
let currentAccessToken: string | null = null;

export type GoogleAuthState = 'not_connected' | 'connecting' | 'connected';

// Listeners for auth state changes
type AuthStateListener = (state: GoogleAuthState, token: string | null) => void;
const authStateListeners: AuthStateListener[] = [];

export const subscribeToAuthState = (listener: AuthStateListener) => {
  authStateListeners.push(listener);
  return () => {
    const index = authStateListeners.indexOf(listener);
    if (index > -1) authStateListeners.splice(index, 1);
  };
};

const notifyAuthStateChange = (state: GoogleAuthState, token: string | null) => {
  authStateListeners.forEach(listener => listener(state, token));
};

export const getGoogleAuthState = (): GoogleAuthState => {
  if (currentAccessToken) return 'connected';
  return 'not_connected';
};

export const getAccessToken = (): string | null => currentAccessToken;

const initializeGIS = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (gisInitialized && tokenClient) {
      resolve();
      return;
    }

    // Check if GIS script is already loaded
    if (typeof google !== 'undefined' && google.accounts?.oauth2) {
      try {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: '', // Will be set during request
        });
        gisInitialized = true;
        console.log('GIS initialized (already loaded)');
        resolve();
      } catch (error) {
        console.error('Error initializing GIS:', error);
        reject(error);
      }
      return;
    }

    // Load GIS script
    const gisScript = document.createElement('script');
    gisScript.src = 'https://accounts.google.com/gsi/client';
    gisScript.onload = () => {
      try {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: '', // Will be set during request
        });
        gisInitialized = true;
        console.log('GIS initialized');
        resolve();
      } catch (error) {
        console.error('Error initializing GIS:', error);
        reject(error);
      }
    };
    gisScript.onerror = reject;
    document.head.appendChild(gisScript);
  });
};

/**
 * MUST be called from a direct user click handler (e.g., button onClick).
 * This is the ONLY function that triggers the OAuth popup.
 */
export const connectGoogleAccount = async (): Promise<string> => {
  notifyAuthStateChange('connecting', null);
  
  try {
    await initializeGIS();
    
    return new Promise((resolve, reject) => {
      tokenClient.callback = (response: any) => {
        if (response.error !== undefined) {
          currentAccessToken = null;
          notifyAuthStateChange('not_connected', null);
          reject(new Error(response.error));
          return;
        }
        currentAccessToken = response.access_token;
        notifyAuthStateChange('connected', response.access_token);
        console.log('Google account connected');
        resolve(response.access_token);
      };
      
      // This MUST be called synchronously from a user gesture
      tokenClient.requestAccessToken({ prompt: 'consent' });
    });
  } catch (error) {
    currentAccessToken = null;
    notifyAuthStateChange('not_connected', null);
    throw error;
  }
};

/**
 * Disconnect Google account (clear token)
 */
export const disconnectGoogleAccount = () => {
  currentAccessToken = null;
  notifyAuthStateChange('not_connected', null);
};

/**
 * Check if we have a valid token before making API calls
 */
export const isGoogleConnected = (): boolean => {
  return currentAccessToken !== null;
};

/**
 * Upload file to Google Drive using existing token.
 * DOES NOT trigger OAuth - must call connectGoogleAccount first.
 * @throws Error if not connected
 */
export const uploadToGoogleDrive = async (file: File): Promise<string> => {
  if (!currentAccessToken) {
    throw new Error('Google account not connected. Please connect first.');
  }

  // Create metadata
  const metadata = {
    name: file.name,
    mimeType: file.type,
  };

  // Create multipart form data
  const formData = new FormData();
  formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  formData.append('file', file);

  // Upload file to Google Drive
  const uploadResponse = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink',
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${currentAccessToken}` },
      body: formData,
    }
  );

  if (!uploadResponse.ok) {
    const errorData = await uploadResponse.json();
    console.error('Google Drive upload error:', errorData);
    // Check if token expired
    if (uploadResponse.status === 401) {
      currentAccessToken = null;
      notifyAuthStateChange('not_connected', null);
      throw new Error('Session expired. Please reconnect your Google account.');
    }
    throw new Error('Failed to upload file to Google Drive');
  }

  const uploadResult = await uploadResponse.json();
  const fileId = uploadResult.id;

  // Set file permissions to "anyone with link can view"
  const permResponse = await fetch(
    `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${currentAccessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role: 'reader', type: 'anyone' }),
    }
  );

  if (!permResponse.ok) {
    console.warn('Failed to set file permissions, file may not be publicly viewable');
  }

  // Return shareable link
  return `https://drive.google.com/file/d/${fileId}/view`;
};

/**
 * Append data to Google Sheet using existing token.
 * DOES NOT trigger OAuth - must call connectGoogleAccount first.
 * @throws Error if not connected
 */
export const appendToGoogleSheet = async (formData: any): Promise<void> => {
  if (!currentAccessToken) {
    throw new Error('Google account not connected. Please connect first.');
  }
  
  // Create a row with all form data in order
  const row = [
    formData.name || '',
    formData.email || '',
    formData.phone || '',
    formData.countryOfCitizenship || '',
    formData.currentVisa || '',
    formData.timeline || '',
    formData.resume || '',
    formData.linkedIn || '',
    formData.roleType || '',
    formData.qualifications || '',
    formData.awards || '',
    formData.associations || '',
    formData.mediaCoverage || '',
    formData.impactfulWork || '',
    formData.scholarlyArticles || '',
    formData.criticalRole || '',
    formData.immigrationIssues || '',
    formData.familyInUS || '',
    new Date().toISOString(), // Submitted At timestamp
  ];

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A:S:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${currentAccessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [row],
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Google Sheets API error:', errorData);
    // Check if token expired
    if (response.status === 401) {
      currentAccessToken = null;
      notifyAuthStateChange('not_connected', null);
      throw new Error('Session expired. Please reconnect your Google account.');
    }
    throw new Error('Failed to append data to Google Sheet');
  }

  const result = await response.json();
  console.log('Data appended successfully:', result);
};
