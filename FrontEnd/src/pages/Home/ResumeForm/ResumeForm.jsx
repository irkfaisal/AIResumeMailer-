import './ResumeForm.css'

const ResumeForm = () => {
    return (
        <>
            <section className={`glass-effect resumeFormSection`}>
                <p>Fill details to generate custom Ai promt</p>
                <div className="w-1/2 border-t border-gray-300"></div>
                <div className='resumeFormFields'>
                    {/* Basic User Information */}
                    <div className='FormField p-4'>
                        <label htmlFor="text" className="mb-2 text-base text-center font-medium text-white">
                            Basic User Information
                        </label>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter Name (ex: John Doe)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="number" className="mb-2 text-base font-medium text-white">
                                Phone
                            </label>
                            <input
                                type="number"
                                id="phone"
                                placeholder="Enter Phone no (ex: +1234567890)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                LinkedIn
                            </label>
                            <input
                                type="text"
                                id="linkedin"
                                placeholder="Enter LinkedIn (ex: https://www.linkedin.com/in/johndoe/)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Github
                            </label>
                            <input
                                type="text"
                                id="github"
                                placeholder="Enter Github (ex: https://www.github/johndoe.com)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Portfolio
                            </label>
                            <input
                                type="text"
                                id="portfolio"
                                placeholder="Enter Portfolio (ex: https://www.johndoe.com)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                    </div>
                    {/* Job-Related Information */}
                    <div className='FormField p-4'>
                        <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                            Job-Related Information
                        </label>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Position Applying For
                            </label>
                            <input
                                type="text"
                                id="position"
                                placeholder="Enter Position Applying For (ex:Software Engineer)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Email Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Enter Mail subject (ex: Application for UI Developer)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="number" className="mb-2 text-base font-medium text-white">
                                Company name
                            </label>
                            <input
                                type="text"
                                id="company"
                                placeholder="Enter the Company Name (ex: Tech Corp)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Job Posting Link
                            </label>
                            <input
                                type="text"
                                id="jobLink"
                                placeholder="Enter your Job Post Link (ex: careers.techcorp.com/job/12345)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Skills
                            </label>
                            <input
                                type="text"
                                id="skills"
                                placeholder="Enter Skills (ex: JavaScript, React, Node.js, etc.)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                    </div>
                    {/* Professional Background */}
                    <div className='FormField p-4'>
                        <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                            Professional Background
                        </label>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Professional Summary
                            </label>
                            <input
                                type="text"
                                id="summary"
                                placeholder="A brief introduction about the exper & skills."
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Current/Last Job Title
                            </label>
                            <input
                                type="text"
                                id="company"
                                placeholder="Enter the job title (ex: Backend Developer)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Current/Last Employer
                            </label>
                            <input
                                type="text"
                                id="jobLink"
                                placeholder="Enter current/last employer (ex: Innovate Solutions Inc)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Years of Experience
                            </label>
                            <input
                                type="text"
                                id="experience"
                                placeholder="Enter experience (ex: 3 years)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="text" className="mb-2 text-base font-medium text-white">
                                Resume Link
                            </label>
                            <input
                                type="text"
                                id="resumeLink"
                                placeholder="Add Resume/Cover Letter link (ex: www.myresume.com)"
                                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
                <button className="flex items-center px-4 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#7de7eb] focus:outline-none focus:ring-2 focus:bg-[#5ce1e6] focus:ring-opacity-75">
                    Generate Prompt
                    <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                    </svg>
                </button>

            </section>
        </>
    )
}

export default ResumeForm