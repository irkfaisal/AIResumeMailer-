import { useState } from 'react'
import './ResumeForm.css'
import { InputField, InputLabel } from '../../../components'
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { userDataPost } from '../../../store/Slices/postSliceUserData';

const ResumeForm = () => {
    const [userDeatils, setUserDetails] = useState({
        name: '',
        phone: '',
        linkedin: '',
        github: '',
        portfolio: '',
        jobPosition: '',
        mailSubject: '',
        company: '',
        jobLink: '',
        skills: '',
        summary: '',
        jobTitle: '',
        employer: '',
        experience: '',
        resumeLink: ''
    })

    const dispatch = useDispatch();
    const { error, status } = useSelector((state) => state.postUserData)

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, phone, linkedin, github, jobPosition, mailSubject, company, skills, summary, jobTitle, employer, experience, resumeLink } = userDeatils
        if (!name.trim() || !phone || !linkedin.trim() || !github.trim() || !jobPosition.trim() || !mailSubject.trim() || !company.trim() || !skills.trim() || !summary.trim() || !jobTitle.trim() || !employer.trim() || !experience || !resumeLink.trim()) {
            toast.error("Please fill out all required fields.");
            return;
        }
        if (error) {
            toast.error("Something went wrong!");
            return
        }
        dispatch(userDataPost(userDeatils))
    }

    return (
        <>
            {status === 'loading' ? <h1>Loading ...</h1> :
                <form onSubmit={(e) => handleFormSubmit(e)} className={`glass-effect resumeFormSection`}>
                    <p>Fill details to generate custom Ai promt</p>
                    <div className="w-1/2 border-t border-gray-300"></div>
                    <div className='resumeFormFields'>
                        {/* Basic User Information */}
                        <div className='FormField p-4'>
                            <InputLabel label={"Basic User Information"} />

                            <InputField label={"Full Name*"} type={"text"} id={"name"} placeholder={"Enter Name (ex: John Doe)"} value={userDeatils.name} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Phone"} type={"number"} id={"phone"} placeholder={"Enter Phone no (ex: +1234567890)"} value={userDeatils.phone} onChange={(e) => handleChnage(e)} />

                            <InputField label={"LinkedIn*"} type={"text"} id={"linkedin"} placeholder={"Enter LinkedIn (ex: https://www.linkedin.com/in/johndoe/)"} value={userDeatils.linkedin} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Github*"} type={"text"} id={"github"} placeholder={"Enter Github (ex: https://www.github/johndoe.com)"} value={userDeatils.github} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Portfolio"} type={"text"} id={"portfolio"} placeholder={"Enter Portfolio (ex: https://www.johndoe.com)"} value={userDeatils.portfolio} onChange={(e) => handleChnage(e)} />
                        </div>
                        {/* Job-Related Information */}
                        <div className='FormField p-4'>
                            <InputLabel label={"Job-Related Information"} />

                            <InputField label={"Position Applying For*"} type={"text"} id={"jobPosition"} placeholder={"Enter Position Applying For (ex:Software Engineer)"} value={userDeatils.jobPosition} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Email Subject*"} type={"text"} id={"mailSubject"} placeholder={"Enter Mail subject (ex: Application for UI Developer)"} value={userDeatils.mailSubject} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Company name*"} type={"text"} id={"company"} placeholder={"Enter the Company Name (ex: Tech Corp)"} value={userDeatils.company} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Job Post Link"} type={"text"} id={"jobLink"} placeholder={"Enter your Job Post Link (ex: careers.techcorp.com/job/12345)"} value={userDeatils.jobLink} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Skill*"} type={"text"} id={"skills"} placeholder={"Enter Skills (ex: JavaScript, React, Node.js, etc.)"} value={userDeatils.skills} onChange={(e) => handleChnage(e)} />
                        </div>
                        {/* Professional Background */}
                        <div className='FormField p-4'>
                            <InputLabel label={"Professional Background"} />

                            <InputField label={"Professional Summary*"} type={"text"} id={"summary"} placeholder={"A brief introduction about the exper & skills."} value={userDeatils.summary} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Current/Last Job Title*"} type={"text"} id={"jobTitle"} placeholder={"Enter the job title (ex: Backend Developer)"} value={userDeatils.jobTitle} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Current/Last Employer*"} type={"text"} id={"employer"} placeholder={"Enter current/last employer (ex: Innovate Solutions Inc)"} value={userDeatils.employer} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Years of Experience*"} type={"number"} id={"experience"} placeholder={"Enter experience (ex: 3 years)"} value={userDeatils.experience} onChange={(e) => handleChnage(e)} />

                            <InputField label={"Resume Link*"} type={"text"} id={"resumeLink"} placeholder={"Add Resume/Cover Letter link (ex: www.myresume.com)"} value={userDeatils.resumeLink} onChange={(e) => handleChnage(e)} />
                        </div>
                    </div>
                    <button type='submit' className="flex items-center px-8 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#7de7eb] focus:outline-none focus:ring-2 focus:bg-[#5ce1e6] focus:ring-opacity-75">
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
                </form>
            }
        </>
    )
}

export default ResumeForm