import { useState } from 'react';
import BlogLayout from '../components/Layout/blog-layout';

const HomePage = () => {

    return <BlogLayout>
        <div className='full centered-col justify-evenly'>
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