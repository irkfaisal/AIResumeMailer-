import { useTab } from "../../hooks/useTab";


export function TabsList({ children }) {
    return <div style={{ display: "flex", gap: "8px" }}>{children}</div>;
}

TabsList.Tab = function Tab({ index, children }) {
    const { activeTab, setActiveTab } = useTab();
    const isActive = activeTab === index;
    const onClick = () => setActiveTab(index);

    return (
        <button
            onClick={onClick}
            style={{
                padding: "8px 12px",
                cursor: "pointer",
                borderBottom: isActive ? "2px solid blue" : "2px solid transparent",
                background: "none",
            }}
        >
            {children}
        </button>
    );
};

TabsList.Panels = function TabPanels({ children }) {
    return <div>{children}</div>;
};

TabsList.Panel = function TabPanel({ index, children }) {
    const { activeTab } = useTab();
    if (activeTab !== index) return null;

    return <div>{children}</div>;
};