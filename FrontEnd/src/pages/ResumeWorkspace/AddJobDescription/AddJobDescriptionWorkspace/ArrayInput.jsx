import { useState } from 'react';
import { InputProvider } from '../../../../context/InputProvider';
import { Input } from '../../../../components/Input/Input';

/**
 * ArrayInput Component - Reusable component for managing array inputs
 * Currently Used for Skills and Roles & Responsibilities
 */
export default function ArrayInput({
    label,
    placeholder,
    items = [],
    onAdd,
    onRemove,
    error,
    required = false,
    inputType = 'text',
    helperText = ''
}) {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');

    const handleAdd = () => {
        const trimmedValue = inputValue.trim();

        if (!trimmedValue) {
            setInputError('This field cannot be empty');
            return;
        }

        // Check minimum length based on type
        const minLength = inputType === 'textarea' ? 5 : 2;
        if (trimmedValue.length < minLength) {
            setInputError(`Must be at least ${minLength} characters`);
            return;
        }

        // Check for duplicates
        if (items.includes(trimmedValue)) {
            setInputError('This item already exists');
            return;
        }

        onAdd(trimmedValue);
        setInputValue('');
        setInputError('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAdd();
        }
    };

    const handleRemove = (index) => {
        onRemove(index);
    };

    return (
        <div className="space-y-3">
            {/* Input Section */}
            <div>
                <InputProvider
                    type={inputType}
                    required={required}
                    error={inputError || error}
                >
                    <div className="flex flex-col gap-1">
                        <Input.Label>{label}</Input.Label>
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <Input
                                    value={inputValue}
                                    onChange={(e) => {
                                        setInputValue(e.target.value);
                                        setInputError('');
                                    }}
                                    onKeyPress={handleKeyPress}
                                    placeholder={placeholder}
                                    rows={inputType === 'textarea' ? 3 : undefined}
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleAdd}
                                className="px-4 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg hover:bg-[#4bc8cd] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5ce1e6] focus:ring-offset-1 whitespace-nowrap"
                            >
                                Add
                            </button>
                        </div>
                        {helperText && !inputError && !error && (
                            <p className="text-xs text-gray-500">{helperText}</p>
                        )}
                        <Input.Error />
                    </div>
                </InputProvider>
            </div>

            {/* Items List */}
            {items.length > 0 && (
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                        Added {label} ({items.length})
                    </p>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 group hover:border-gray-300 transition-colors"
                            >
                                <span className="flex-1 text-sm text-gray-800 break-words">
                                    {inputType === 'text' ? (
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#5ce1e6]/10 text-[#5ce1e6] font-medium">
                                            {item}
                                        </span>
                                    ) : (
                                        <span className="block">{item}</span>
                                    )}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => handleRemove(index)}
                                    className="text-red-500 hover:text-red-700 font-bold text-lg leading-none transition-colors focus:outline-none"
                                    aria-label="Remove item"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Empty State */}
            {items.length === 0 && (
                <div className="text-center py-4 px-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <p className="text-sm text-gray-500">
                        No {label.toLowerCase()} added yet. Add your first item above.
                    </p>
                </div>
            )}
        </div>
    );
}
