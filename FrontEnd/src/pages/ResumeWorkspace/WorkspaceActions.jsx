import { Modal } from '../../components';
import { ResumeCardActions } from '../../constants/constant';
import { useModal } from '../../hooks/useModal';
import WorkspaceActionCard from './WorkspaceActionCard';

const ACTION_TYPES = {
    RESUME: 'RESUME',
    VIEW_PROFILE: 'VIEW_PROFILE',
    ADD_PROFILE: 'ADD_PROFILE'
};

const WorkspaceActions = () => {
    const { openModal, modalState } = useModal();

    const isMyModal = Object.values(ACTION_TYPES).includes(modalState.type);

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ResumeCardActions.map((action) => (
                    <WorkspaceActionCard key={action.type} action={action} openModal={openModal} />
                ))}
            </div>

            {isMyModal && (
                <Modal>
                    <Modal.Header>
                        {modalState.type === ACTION_TYPES.RESUME && 'Resume Management'}
                        {modalState.type === ACTION_TYPES.VIEW_PROFILE && 'Profile Details'}
                        {modalState.type === ACTION_TYPES.ADD_PROFILE && 'Add New Profile'}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="min-h-[200px] flex items-center justify-center text-gray-500">
                            {modalState.type === ACTION_TYPES.RESUME && <p>Resume management content will go here.</p>}
                            {modalState.type === ACTION_TYPES.VIEW_PROFILE && <p>Profile details will be displayed here.</p>}
                            {modalState.type === ACTION_TYPES.ADD_PROFILE && <p>Form to add a new profile will go here.</p>}
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default WorkspaceActions;
