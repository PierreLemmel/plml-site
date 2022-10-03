import { google } from "googleapis";

export type pagesDatabase = {
    readonly [key: string]: string;
};

function getAuth(scopes: string[]) {
    const auth = new google.auth.GoogleAuth({ scopes });

    auth.jsonContent = {
        "private_key": process.env["GCLOUD_PRIVATE_KEY"],
        "client_email": process.env["GCLOUD_CLIENT_EMAIL"],
    }

    return auth;
}

async function getPagesDatabase() {
    const auth = getAuth([
        'https://www.googleapis.com/auth/spreadsheets.readonly'
    ]);

    const sheets = google.sheets({ version: 'v4', auth });
    
    const rangeResponse = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.DATABASE_SHEET_ID,
        range: "Database!F2:F2",
    });

    const dbRange = rangeResponse.data.values[0][0];

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.DATABASE_SHEET_ID,
      range: dbRange,
    });

    return response.data.values?.reduce((curr, [key, id]) => {
        return {
            ...curr,
            [key]: id
        }
    }, { }) ?? { };
}

export async function getGoogleDocContent(key: string) {

    const pagesDatabase = await getPagesDatabase();

    const auth = getAuth([
        'https://www.googleapis.com/auth/documents.readonly',
    ]);

    const docs = google.docs({ version: 'v1', auth});

    const docId: string = pagesDatabase[key];

    const indexDoc = await docs.documents.get({
        documentId: docId
    });

    return {
        doc: indexDoc.data
    };
}