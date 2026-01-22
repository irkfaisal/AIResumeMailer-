import { useContext } from "react";
import { ModalContext } from "../context/ModalProvider";


export function useModal() {
    console.log("useModal", ModalContext);
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be used within a ModalProvider")
    }
    return context;
}