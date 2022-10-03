import GoogleDocDisplayer from '../components/Google/google-doc-displayer';
import BlogLayout from '../components/Layout/blog-layout';
import { getGoogleDocContent } from '../services/googleHooks';

export async function getServerSideProps() {

    const { doc } = await getGoogleDocContent('Blog')

    return {
        props: {
            doc
        }
    };
}

const BlogPage = ({ doc }) => {

    return <BlogLayout>
        <div className='full centered-col justify-evenly'>
            <GoogleDocDisplayer document={doc}/>
        </div>
    </BlogLayout>
}


export default BlogPage;