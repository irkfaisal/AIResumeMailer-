import { AuthProvider } from "./auth";
import { ModalProvider } from "./ModalProvider";
import { TabProvider } from "./TabProvider";
import { InputProvider } from "./InputProvider";

export function ContextProvider({ children }) {
    return (
        <AuthProvider>
            <TabProvider>
                <ModalProvider>
                    <InputProvider>
                        {children}
                    </InputProvider>
                </ModalProvider>
            </TabProvider>
        </AuthProvider >
    );
}