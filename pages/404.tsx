import BlogLayout from "../components/Layout/blog-layout";

const NotFound = () => {

    return <BlogLayout>
        <div className="full center-child font-handwritten text-6xl">
            <div className="w-1/2 text-center">
                Oups ! Impossible de trouver la page demandée :'(
            </div>
        </div>
    </BlogLayout>
}

export default NotFound;