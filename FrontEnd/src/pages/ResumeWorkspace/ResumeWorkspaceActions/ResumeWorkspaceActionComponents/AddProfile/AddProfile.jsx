import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'sonner';
import { TabProvider } from "../../../../../context/TabProvider";
import { TabsList } from "../../../../../components/Tab/Tabs";
import { useTab } from "../../../../../hooks/useTab";
import BasicDetails from "./AddProfileTabComponents/BasicDetails";
import JobDetails from "./AddProfileTabComponents/JobDetails";
import ProfessionalDetails from "./AddProfileTabComponents/ProfessionalDetails";
import { addProfileSchema } from "./validationSchemas";
import { useProfile } from "../../../../../hooks/apiHooks/useProfile";

const NavigationControls = ({ isSubmitting }) => {
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
                type="button"
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
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#4bc8cd] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5ce1e6] focus:ring-offset-1"
                >
                    Next
                </button>
            ) : (
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Profile'}
                </button>
            )}
        </div>
    );
};

export default function AddProfile() {
    const { saveProfile, loading } = useProfile();
    const methods = useForm({
        resolver: yupResolver(addProfileSchema),
        mode: 'onBlur', // Validate on blur for better UX
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            linkedinLink: '',
            githubLink: '',
            twitterLink: '',
            portfolioLink: '',
            articleLink: '',
            jobTitle: '',
            yearsOfExperience: '',
            jobLocation: '',
            skills: '',
            tools: '',
            specialization: '',
            professionalSummary: '',
            projectLink: '',
            projectDescription: '',
            additionalInfo: '',
        },
    });

    const onSubmit = async (data) => {
        console.log('Form submitted successfully:', data);
        try {
            await saveProfile(data);
            console.log('Profile created successfully!', data);
            toast.success('Profile created successfully!');
        } catch (error) {
            console.error('Profile creation failed:', error);
            toast.error('Failed to create profile.');
        }
    };

    const onError = (errors) => {
        console.error('Form validation errors:', errors);
        toast.error('Please fix the validation errors before submitting.');
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
                <TabProvider defaultTab={0}>
                    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 my-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Create New Profile</h2>

                        <TabsList>
                            <TabsList.Tab index={0}>Basic Details</TabsList.Tab>
                            <TabsList.Tab index={1}>Job Details</TabsList.Tab>
                            <TabsList.Tab index={2}>Professional Details</TabsList.Tab>
                        </TabsList>

                        <div className="mt-8 h-[calc(100vh-70vh)] overflow-y-auto">
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
                        <NavigationControls isSubmitting={loading} />
                    </div>
                </TabProvider>
            </form>
        </FormProvider>
    );
}
