import { Modal } from "../../../../components"

const ModalContent = () => {
    return (
        <div>
            <h1>Are you sure want to mail to mailid@mail.com ?</h1>
        </div>
    )
}

const ConfimSendModal = () => {

    const handleSend = () => {
        alert("Submit")
    }

    return (
        <Modal
            content={<ModalContent />}
            modalTitle={"Send Mail Confirmation"} btnTitle={"Send"}
            modalSubmit={handleSend}
        />
    )
}

export default ConfimSendModal