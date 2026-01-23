import { createContext, useState, useMemo } from "react";

export const ModalContext = createContext(null);

export function ModalProvider({ children }) {

    const [modalState, setModalState] = useState({
        isOpen: false,
        loading: false,
        type: null,
        payload: null,
    });

    const openModal = (type = null, payload = null) => {
        setModalState({
            isOpen: true,
            loading: false,
            type,
            payload,
        });
    };
    const closeModal = () => {
        setModalState({
            isOpen: false,
            loading: false,
            type: null,
            payload: null,
        });
    };
    const openLoadingModal = () => {
        setModalState({
            isOpen: true,
            loading: true,
            type: null,
            payload: null,
        });
    };
    const value = useMemo(() => {
        return {
            modalState,
            openModal,
            closeModal,
            openLoadingModal,
        }
    }, [modalState]);

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};