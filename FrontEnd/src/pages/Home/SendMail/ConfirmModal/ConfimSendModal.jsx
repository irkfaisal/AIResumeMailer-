import { Modal } from "../../../../components"

const ModalContent = () => {
    return (
        <div>
            A mail will be shared to the written email id
        </div>
    )
}

const ConfimSendModal = () => {

    const handleSend = () => {
        alert("Submit")
    }

    return (
        <div>
            <Modal
                content={<ModalContent />}
                modalTitle={"Send Mail Confirmation"} btnTitle={"Send"}
                modalSubmit={handleSend}
            />
        </div>
    )
}

export default ConfimSendModal