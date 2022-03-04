import Banneer from "./banneer";
import MainMenu from "./mainMenu";

interface BlogLayoutProps {
    readonly children: JSX.Element;
}

const BlogLayout = (props: BlogLayoutProps) => {

    const { children } = props;

    return <div className="w-full h-full centered-col bg-secondary-600 text-primary-400">
        <div className="w-full bg-secondary-800">
            <Banneer />
            <MainMenu />
        </div>
        <div className="p-4 flex-grow">
            {children}
        </div>
    </div>
}

export default BlogLayout;