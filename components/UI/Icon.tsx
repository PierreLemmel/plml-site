import { IconType } from "react-icons/lib";
import { conditionnal } from "../../services/helpers";

const iconDefaultColorPrimary = '#ed7a22';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly icon: IconType;
}

const Icon = (props: IconProps) => <div className={`h-16 w-16
    text-primary-400 hover:text-primary-800 transition-colors
    ${conditionnal(props.onClick !== undefined, 'hover:cursor-pointer')}
    duration-300
`} {...props}>
    {props.icon({
        className: 'full'
    })}
</div>

export default Icon;