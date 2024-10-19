const InputLabel = ({ label, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="mb-2 text-base text-start font-medium text-white">
            {label}
        </label>
    )
}

export default InputLabel