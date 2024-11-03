import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { closeModal } from '../../store/Slices/modalStateSlice'

const Modal = ({ content, modalTitle, btnTitle, modalSubmit }) => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state) => state.modal.isOpen)
    const closeModalClick = () => {
        dispatch(closeModal())
    }

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={closeModalClick}
            >
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogContent>
                    {content}
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModalClick}>Cancel</Button>
                    <Button onClick={modalSubmit} type="submit">{btnTitle}</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Modal