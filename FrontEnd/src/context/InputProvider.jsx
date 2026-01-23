
import { createContext, useCallback, useMemo, useState } from "react";

export const InputContext = createContext(null);

export function InputProvider({
    children,
    type = "text",
    value: controlledValue,
    defaultValue = "",
    onChange,
    disabled = false,
    error = "",
    size = "md",
    required = false,
}) {
    const isControlled = controlledValue !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

    const value = isControlled ? controlledValue : uncontrolledValue;

    const handleChange = useCallback((e) => {
        if (!isControlled) {
            setUncontrolledValue(e.target.value);
        }
        onChange?.(e);
    }, [isControlled, onChange]);

    const contextValue = useMemo(
        () => ({
            type,
            value,
            disabled,
            error,
            size,
            onChange: handleChange,
            required,
        }),
        [type, value, disabled, error, size, required, handleChange]
    );

    return (
        <InputContext.Provider value={contextValue}>
            {children}
        </InputContext.Provider>
    );
}