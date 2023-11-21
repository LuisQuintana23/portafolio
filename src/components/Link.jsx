
const Link = ({children, href}) => {
    return (
        <a href={href} className="text-sm font-light hover:text-violet-500">
            {children}
        </a>
    );
};

export default Link;