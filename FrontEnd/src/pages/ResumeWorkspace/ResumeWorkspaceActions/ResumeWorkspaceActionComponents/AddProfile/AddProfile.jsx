import { TabProvider } from "../../../../../context/TabProvider";
import { TabsList } from "../../../../../components/Tab/Tabs";
import { useTab } from "../../../../../hooks/useTab";
import BasicDetails from "./AddProfileTabComponents/BasicDetails";
import JobDetails from "./AddProfileTabComponents/JobDetails";
import ProfessionalDetails from "./AddProfileTabComponents/ProfessionalDetails";

const NavigationControls = () => {
    const { activeTab, setActiveTab } = useTab();

    const handleNext = () => {
        if (activeTab < 2) setActiveTab(activeTab + 1);
    };

    const handlePrevious = () => {
        if (activeTab > 0) setActiveTab(activeTab - 1);
    };

    return (
        <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
            <button
                onClick={handlePrevious}
                disabled={activeTab === 0}
                className={`px-4 py-2 font-semibold rounded-lg transition-colors
                    ${activeTab === 0
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 hover:text-gray-900 border border-gray-300 hover:bg-gray-50'
                    }`}
            >
                Previous
            </button>

            {activeTab < 2 ? (
                <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#4bc8cd] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5ce1e6] focus:ring-offset-1"
                >
                    Next
                </button>
            ) : (
                <button
                    className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                >
                    Submit Profile
                </button>
            )}
        </div>
    );
};

export default function AddProfile() {
    return (
        <TabProvider defaultTab={0}>
            <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 my-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Create New Profile</h2>

                <TabsList>
                    <TabsList.Tab index={0}>Basic Details</TabsList.Tab>
                    <TabsList.Tab index={1}>Job Details</TabsList.Tab>
                    <TabsList.Tab index={2}>Professional Details</TabsList.Tab>
                </TabsList>

                <div className="mt-8 min-h-[300px]">
                    <TabsList.Panel index={0}>
                        <BasicDetails />
                    </TabsList.Panel>
                    <TabsList.Panel index={1}>
                        <JobDetails />
                    </TabsList.Panel>
                    <TabsList.Panel index={2}>
                        <ProfessionalDetails />
                    </TabsList.Panel>
                </div>
                <NavigationControls />
            </div>
        </TabProvider>
    );
}