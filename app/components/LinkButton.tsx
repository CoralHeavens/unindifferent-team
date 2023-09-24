interface LinkButtonInterface {
    label: string,
    link: string
}

const LinkButton:React.FC<LinkButtonInterface> = ({
    label,
    link
}) => {
    return (
        <a
            href={link}
            className="rounded-xl bg-slate-700 text-white p-3 px-4 uppercase hover:text-slate-700 hover:bg-white hover:shadow-2xl hover:drop-shadow-2xl hover:transition-all duration-700"
        >
            {label}
        </a>
    )
}

export default LinkButton;