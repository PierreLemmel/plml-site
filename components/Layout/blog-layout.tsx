import { readSync } from "fs";
import { useEffect, useRef, useState } from "react";
import { px } from "../../services/helpers";
import { useScrollYPos } from "../../services/hooks";
import Banneer from "./banneer";
import MainMenu from "./mainMenu";

interface BlogLayoutProps {
    readonly children: JSX.Element;
}

const BlogLayout = (props: BlogLayoutProps) => {

    const { children } = props;

    const headerRef = useRef<HTMLDivElement>();
    const banneerRef = useRef<HTMLDivElement>();

    const headerHeight = headerRef.current?.clientHeight ?? 0;
    const banneerHeight = banneerRef.current?.clientHeight ?? 0;

    const [ready, setReady] = useState<boolean>(false);
    useEffect(() => {
        setReady(true);
    }, [])

    const scrollY = useScrollYPos();

    return <div className={`
            full relative
            bg-secondary-600 text-primary-400
            overflow-x-hidden
            min-h-screen
        `}
    >
        <div
            style={{
                top: px(-Math.min(scrollY, banneerHeight))
            }}
            className="w-full bg-secondary-800 fixed top-0"
            ref={headerRef}
        >
            <div ref={banneerRef} className={`
                2xl:pt-4 xl:pt-3 pt-2
                pb-2
            `}>
                <Banneer />
            </div>
            <div className={`
                2xl:py-4 xl:py-3 py-2
            `}>
                <MainMenu />
            </div>
        </div>
        <div 
            style={{
                marginTop: px(headerHeight)
            }}
            className="w-full basis-fill flex-1"
        >
            <div className="overflow-y-auto p-4 ">
                {children}
            </div>
        </div>
    </div>
}

export default BlogLayout;