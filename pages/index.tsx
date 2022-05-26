import { google } from 'googleapis';
import { useState } from 'react';
import BlogLayout from '../components/Layout/blog-layout';

export async function getServerSideProps() {

    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});

    const sheets = google.sheets({ version: 'v4', auth });

    const range = `Database!B2:B2`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.DATABASE_SHEET_ID,
      range,
    });

    const docId: string = response.data.values[0][0];

    return {
        props: {
            docId
        }
    };
}

const HomePage = ({ docId }) => {

    return <BlogLayout>
        <div className='full centered-col justify-evenly'>
            <div>{docId}</div>

            <div className="font-handwritten text-4xl centered-col">
                <div>Pierre Lemmel</div>
                <div>Pêle-mèle</div>
                <div>Plml</div>
            </div>

            <div className="font-handwritten text-4xl centered-col">
                <div>Pierre Lemmel</div>
                <div>Pêle-mèle</div>
                <div>Plml</div>
            </div>

            <div className="font-handwritten text-4xl centered-col">
                <div>Pierre Lemmel</div>
                <div>Pêle-mèle</div>
                <div>Plml</div>
            </div>
            
            <div className="font-handwritten text-4xl centered-col">
                <div>Pierre Lemmel</div>
                <div>Pêle-mèle</div>
                <div>Plml</div>
            </div>

            <div className="font-handwritten2 text-4xl centered-col">
                <div>Pierre Lemmel</div>
                <div>Pêle-mèle</div>
                <div>Plml</div>
            </div>

            <div className="font-handwritten3 text-8xl centered-col">
                <div>Pierre Lemmel</div>
                <div>Pêle-mèle</div>
                <div>Plml</div>
            </div>
        </div>
    </BlogLayout>
}


export default HomePage;