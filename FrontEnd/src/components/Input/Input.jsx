import { forwardRef } from "react";
import { InputbaseClasses, InputsizeClasses } from "../../constants/constant";
import { useInput } from "../../hooks/useInput";

export const Input = forwardRef((props, ref) => {
    const context = useInput();

    // Prioritize props over context for form handling
    const isRegister = !!props.onChange; // Simple check for RHF or external control without value

    const type = props.type || context.type;
    const size = props.size || context.size;
    const error = props.error || context.error;
    const disabled = props.disabled !== undefined ? props.disabled : context.disabled;
    const required = props.required !== undefined ? props.required : context.required;

    // Resolve value and onChange
    // If props has onChange (like from register), use it.
    // If props has value (controlled), use it.
    // If passed by RHF (has onChange, no value), do not bind context.value (leave uncontrolled).
    const onChange = props.onChange || context.onChange;
    const value = props.value !== undefined
        ? props.value
        : (isRegister ? undefined : context.value);

    const InputstateClasses = error
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-blue-500";
    const InputclassName = `${InputbaseClasses} ${InputsizeClasses[size]} ${InputstateClasses}`;

    if (type === "textarea") {
        return (
            <textarea
                {...props}
                ref={ref}
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
                ref={ref}
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
            ref={ref}
            type={type}
            className={InputclassName}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
        />
    );

});

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