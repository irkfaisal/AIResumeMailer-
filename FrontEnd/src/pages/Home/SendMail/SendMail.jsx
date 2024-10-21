import { useState } from 'react'
import { InputField } from '../../../components'
import './SendMail.css'

const inputFieldStyle = {
    width: "75%"
}

const SendMail = () => {
    const [companyMail, setCompanyMail] = useState('')

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setCompanyMail((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmitResp = (e) => {
        e.DefaultPrevent();
        const mail = {
            companyMail,
            aiResp: ''
        }
        console.log(mail)
    }
    return (
        <>
            <section className="glass-effect sendMailSection">
                <p>AI Generated Response</p>
                <div className="border-t border-gray-300"></div>
                <form onSubmit={handleSubmitResp} className='mailField'>
                    <InputField type={"text"} id={"companyMail"} placeholder={"Enter Company/Requirter mail address"} value={companyMail} onChange={(e) => handleChnage(e)} style={inputFieldStyle} />
                    <button className='sendBtn w-1/4 flex items-center px-8 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#7de7eb] focus:outline-none focus:ring-2 focus:bg-[#5ce1e6] focus:ring-opacity-75'>
                        Send
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 ml-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h14M12 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </form>
                <div className='aiResponseTextArea px-4'>
                    <textarea
                        className="resize-none rounded-md w-full h-60 bg-[#8ea8e01f] outline-white text-white p-6 overflow-y-auto"
                    />
                </div>
            </section>
        </>
    )
}

export default SendMail