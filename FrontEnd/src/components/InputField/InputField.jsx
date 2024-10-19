import InputLabel from "../InputLabel/InputLabel"

const InputField = ({ label, value, onChange, placeholder, id, type }) => {
    return (
        <div className="flex flex-col w-full">
            <InputLabel label={label} htmlFor={id} />
            <input
                type={type}
                id={id} name={id}
                value={value} onChange={onChange}
                placeholder={placeholder}
                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
            />
        </div>
    )
}

export default InputField