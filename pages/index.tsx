import { google } from 'googleapis';
import { useState } from 'react';
import GoogleDocDisplayer from '../components/Google/google-doc-displayer';
import BlogLayout from '../components/Layout/blog-layout';

export async function getServerSideProps() {

    const auth = await google.auth.getClient({ scopes: [
        'https://www.googleapis.com/auth/spreadsheets.readonly',
        'https://www.googleapis.com/auth/documents.readonly',
    ]});

    const sheets = google.sheets({ version: 'v4', auth });
    const docs = google.docs({ version: 'v1', auth });


    const range = `Database!B2:B2`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.DATABASE_SHEET_ID,
      range,
    });

    const docId: string = response.data.values[0][0];

    const indexDoc = await docs.documents.get({
        documentId: docId
    });


    return {
        props: {
            doc: indexDoc.data
        }
    };
}

const HomePage = ({ doc }) => {

    return <BlogLayout>
        <div className='full centered-col justify-evenly'>
            <GoogleDocDisplayer document={doc}/>
        </div>
    </BlogLayout>
}


export default HomePage;