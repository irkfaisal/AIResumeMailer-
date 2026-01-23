import { sizeClasses } from "../../constants/constant";
import { useModal } from "../../hooks/useModal";

export function Modal({ children, size = 'lg' }) {
    const { modalState, closeModal } = useModal();
    if (!modalState.isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn"
                onClick={(e) => e.stopPropagation()}>
                <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={closeModal}
                />
                <div className={`relative ${sizeClasses[size]} w-full`} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </>
    )
};

Modal.Header = function ModalHeader({ children }) {
    const { closeModal } = useModal();
    return (
        <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">{children}</h2>
            <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
            >
                X
            </button>
        </div>
    );
};


Modal.Content = function ModalContent({ children, className = '' }) {
    return (
        <div className={`relative bg-white rounded-lg shadow-xl mx-4 animate-slideUp ${className}`}>
            {children}
        </div>
    );
};

Modal.Body = function ModalBody({ children, className = '' }) {
    return <div className={`p-6 ${className}`}>{children}</div>;
};

Modal.Footer = function ModalFooter({ children, className = '' }) {
    return <div className={`flex justify-end gap-3 p-6 border-t ${className}`}>{children}</div>;
};
