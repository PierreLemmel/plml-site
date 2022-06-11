import Link from "next/link";

const MainMenu = () => {

    return <div className={`
        w-full
        text-xl centered-row
        font-menu
    `}>
        <MenuItem label="Accueil" href="/"/>
        <MenuItem label="Blog" href="blog" />
        <MenuItem label="Spectacles" href="spectacles" />
        <MenuItem label="Textes" href="textes" />
        <MenuItem label="A propos" href="a-propos" />
    </div>
}

interface MenuItemProps {
    readonly label: string;
    readonly href: string;
}

const MenuItem = (props: MenuItemProps) => {
    
    const { label, href } = props;

    return <Link href={href}>
        <div className="px-3 hover:cursor-pointer hover:text-primary-800 transition-colors duration-300">
            {label}
        </div>
    </Link>
     
}

export default MainMenu