import { InputbaseClasses, InputsizeClasses, InputstateClasses } from "../../constants/constant";
import { useInput } from "../../hooks/useInput";

export function Input(props) {
    const { type, value, onChange, disabled, required, size } = useInput();
    const InputclassName = `${InputbaseClasses} ${InputsizeClasses[size]} ${InputstateClasses}`;

    if (type === "textarea") {
        return (
            <textarea
                {...props}
                className={InputclassName}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            />
        );
    }

    if (type === "select") {
        return (
            <select
                {...props}
                className={InputclassName}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            />
        );
    }

    return (
        <input
            {...props}
            type={type}
            className={InputclassName}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
        />
    );

};

Input.Label = function InputLabel({ children }) {
    const { required } = useInput();

    return (
        <label className="text-sm font-medium text-gray-700">
            {children}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
    );
};

Input.Error = function InputError() {
    const { error } = useInput();
    if (!error) return null;
    return (
        <span className="text-red-500 text-sm mt-1">{error}</span>
    );
};