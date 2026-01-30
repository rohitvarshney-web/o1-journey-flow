const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || '';
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID || '';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

let tokenClient: any;
let gapiInitialized = false;
let gisInitialized = false;

export const initializeGoogleAPI = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Load GAPI
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      gapi.load('client', async () => {
        try {
          await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
          });
          gapiInitialized = true;
          console.log('GAPI initialized for Sheets');
          resolve();
        } catch (error) {
          console.error('Error initializing GAPI:', error);
          reject(error);
        }
      });
    };
    script.onerror = reject;
    document.head.appendChild(script);

    // Load GIS (Google Identity Services)
    const gisScript = document.createElement('script');
    gisScript.src = 'https://accounts.google.com/gsi/client';
    gisScript.onload = () => {
      tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // Will be set during request
      });
      gisInitialized = true;
      console.log('GIS initialized');
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

export const appendToGoogleSheet = async (formData: any): Promise<void> => {
  if (!gapiInitialized || !gisInitialized) {
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
