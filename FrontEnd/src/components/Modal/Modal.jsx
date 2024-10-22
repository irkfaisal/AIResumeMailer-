import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import useModal from "../../hooks/useModal"

const Modal = ({ content, modalTitle, btnTitle, modalSubmit }) => {
    const { isOpen, closeModal } = useModal()
    return (
        <Dialog
            open={isOpen}
            onClose={closeModal}
        >
            <DialogTitle>{modalTitle}</DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal}>Cancel</Button>
                <Button onClick={modalSubmit} type="submit">{btnTitle}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal