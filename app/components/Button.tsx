interface ButtonInterface {
    label: string,
    disabled?: boolean,
    onClick: () => void
}

const Button:React.FC<ButtonInterface> = ({
    label,
    disabled,
    onClick
}) => {
    return (
        <button
            onClick={onClick} 
            className="rounded-xl bg-slate-700 text-white p-3 px-4 uppercase hover:text-slate-700 hover:bg-white hover:shadow-2xl hover:drop-shadow-2xl hover:transition-all duration-700"
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button;