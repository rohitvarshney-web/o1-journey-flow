import * as XLSX from 'xlsx';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || '';
const FOLDER_ID = '1IXn-2CiLe1wDL3_XYKi8B1E4nAMCLsXO';
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

let tokenClient: any;
let gapiInitialized = false;
let gisInitialized = false;

export const initializeGoogleAPI = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      gapi.load('client', async () => {
        try {
          await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
          });
          gapiInitialized = true;
          console.log('GAPI initialized');
          resolve();
        } catch (error) {
          console.error('Error initializing GAPI:', error);
          reject(error);
        }
      });
    };
    script.onerror = reject;
    document.head.appendChild(script);

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

const createExcelFile = (formData: any): Blob => {
  const worksheet = XLSX.utils.json_to_sheet([formData]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Application');
  
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  return new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
};

export const uploadToGoogleDrive = async (formData: any): Promise<void> => {
  if (!gapiInitialized || !gisInitialized) {
    await initializeGoogleAPI();
  }

  const accessToken = await getAccessToken();
  
  const fileName = `O1_Application_${formData.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.xlsx`;
  const excelBlob = createExcelFile(formData);
  
  const metadata = {
    name: fileName,
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    parents: [FOLDER_ID],
  };

  const formDataToUpload = new FormData();
  formDataToUpload.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  formDataToUpload.append('file', excelBlob);

  const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formDataToUpload,
  });

  if (!response.ok) {
    throw new Error('Failed to upload file to Google Drive');
  }

  const result = await response.json();
  console.log('File uploaded successfully:', result);
};
