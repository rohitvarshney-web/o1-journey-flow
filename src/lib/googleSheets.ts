const CLIENT_ID = '965326801387-clsh11jpj4c23huj7u9p9f4u2dj15cpf.apps.googleusercontent.com';
const SHEET_ID = '1WskGAV25nCtPmE-Bozp1vZGru6yquynwix3wamZ3PuM';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file';

let tokenClient: any;
let gisInitialized = false;

export const initializeGoogleAPI = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (gisInitialized && tokenClient) {
      resolve();
      return;
    }

    // Load only GIS (Google Identity Services) - no GAPI needed
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

const getAccessToken = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      tokenClient.callback = (response: any) => {
        if (response.error !== undefined) {
          reject(response);
        }
        resolve(response.access_token);
      };
      
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } catch (error) {
      reject(error);
    }
  });
};

export const uploadToGoogleDrive = async (file: File): Promise<string> => {
  if (!gisInitialized || !tokenClient) {
    await initializeGoogleAPI();
  }

  const accessToken = await getAccessToken();

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
      headers: { Authorization: `Bearer ${accessToken}` },
      body: formData,
    }
  );

  if (!uploadResponse.ok) {
    const errorData = await uploadResponse.json();
    console.error('Google Drive upload error:', errorData);
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
        Authorization: `Bearer ${accessToken}`,
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

export const appendToGoogleSheet = async (formData: any): Promise<void> => {
  if (!gisInitialized || !tokenClient) {
    await initializeGoogleAPI();
  }

  const accessToken = await getAccessToken();
  
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
        Authorization: `Bearer ${accessToken}`,
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
    throw new Error('Failed to append data to Google Sheet');
  }

  const result = await response.json();
  console.log('Data appended successfully:', result);
};
