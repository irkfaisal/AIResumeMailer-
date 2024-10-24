import { useState } from 'react'
import { InputField } from '../../../components'
import './SendMail.css'
import useModal from '../../../hooks/useModal'
import ConfimSendModal from './ConfirmModal/ConfimSendModal'

const inputFieldStyle = {
    width: "100%"
}

const SendMail = () => {
    const [companyMail, setCompanyMail] = useState('')
    const { isOpen, openModal } = useModal()

    const handleChange = (e) => {
        setCompanyMail(e.target.value)
    }

    const handleSubmitResp = (e) => {
        e.preventDefault();;
        const mail = {
            companyMail,
            aiResp: 'Hello'
        }
        console.log(mail)
        if (mail.companyMail && mail.aiResp) {
            console.log("isOpen", isOpen)
            openModal()
        }
    }

    console.log("isOpen", isOpen)

    return (
        <>
            <section className="glass-effect sendMailSection">
                <p>AI Generated Response</p>
                <div className="border-t border-gray-300 w-1/2"></div>
                <form onSubmit={(e) => handleSubmitResp(e)} className='mailField'>
                    <InputField type={"text"} id={"companyMail"} placeholder={"Enter Company/Requirter mail address (ex: hr@tcs.com)"} value={companyMail} onChange={(e) => handleChange(e)} style={inputFieldStyle} />
                    <button className='sendBtn w-[40%] flex items-center px-8 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#7de7eb] focus:outline-none focus:ring-2 focus:bg-[#5ce1e6] focus:ring-opacity-75'>
                        Submit
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
                        className="resize-none rounded-md w-full h-96 bg-[#fefeff6c] outline-white text-white p-6 overflow-y-auto"
                    />
                </div>
            </section>
            {isOpen && <ConfimSendModal />}
        </>
    )
}

export default SendMail