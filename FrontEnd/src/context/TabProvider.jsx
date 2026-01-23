
import { createContext, useState } from "react";

export const TabContext = createContext(null);

export function TabProvider({ defaultTab = 0, children }) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    )
}