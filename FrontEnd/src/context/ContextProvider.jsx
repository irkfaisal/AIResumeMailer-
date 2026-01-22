import { AuthProvider } from "./auth";
import { ModalProvider } from "./ModalProvider";
import { TabProvider } from "./TabProvider";

export function ContextProvider() {
    return (
        <Context.Provider>
            <ModalProvider />
            <AuthProvider />
            <TabProvider />
        </Context.Provider >
    );
}