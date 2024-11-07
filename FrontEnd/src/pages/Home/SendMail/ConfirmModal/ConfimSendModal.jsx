import { useDispatch, useSelector } from "react-redux"
import { Modal } from "../../../../components"
import { sendMailPost } from "../../../../store/Slices/sendMailSlice"

const ModalContent = () => {
    return (
        <div>
            <h1>Are you sure want to mail to mailid@mail.com ?</h1>
        </div>
    )
}

const ConfimSendModal = () => {
    const dispatch = useDispatch()
    const { error, status } = useSelector((state) => state.sendMail)

    const handleSend = () => {
        alert("Submit")
        dispatch(sendMailPost("data"))
    }

    console.log("error, status", error, status)

    return (
        <Modal
            content={<ModalContent />}
            modalTitle={"Send Mail Confirmation"} btnTitle={"Send"}
            modalSubmit={handleSend}
        />
    )
}

export default ConfimSendModal