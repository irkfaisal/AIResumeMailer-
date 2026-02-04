import { useEffect } from "react";
import { sizeClasses } from "../../constants/constant";
import { useModal } from "../../hooks/useModal";

export default function Modal({ children, size = '2xl' }) {

    const { modalState, closeModal } = useModal();

    useEffect(() => {
        if (modalState.isOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [modalState.isOpen]);

    if (!modalState.isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={closeModal}
            />

            {/* Modal shell */}
            <div
                className={`relative ${sizeClasses[size]} w-[90vw]`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}


Modal.Header = function ModalHeader({ children }) {
    const { closeModal } = useModal();
    return (
        <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-white">{children}</h2>
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
        <div
            className={`bg-white rounded-lg shadow-xl flex flex-col overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
};



Modal.Body = function ModalBody({ children, className = '' }) {
    return (
        <div
            className={`flex-1 min-h-0 overflow-y-auto overscroll-contain p-6 ${className}`}
        >
            {children}
        </div>
    );
};

Modal.Footer = function ModalFooter({ children, className = '' }) {
    return <div className={`flex justify-end gap-3 p-6 border-t ${className}`}>{children}</div>;
};
