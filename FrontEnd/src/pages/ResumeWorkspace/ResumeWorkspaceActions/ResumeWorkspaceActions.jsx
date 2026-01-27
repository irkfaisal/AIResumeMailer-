import { lazy, Suspense } from 'react';
import { Modal } from '../../../components';
import { CARD_ACTION_TYPES, ResumeCardActions } from '../../../constants/constant';
import { useModal } from '../../../hooks/useModal';
import Loader from '../../../components/Loader/Loader';

const AddProfile = lazy(() => import('./ResumeWorkspaceActionComponents/AddProfile/AddProfile'));
const AddResume = lazy(() => import('./ResumeWorkspaceActionComponents/AddResume/AddResume'));
const ResumeWorkspaceActionCard = lazy(() => import('./ResumeWorkspaceActionComponents/ResumeWorkspaceActionCard'));
const ViewProfile = lazy(() => import('./ResumeWorkspaceActionComponents/ViewProfile/ViewProfile'));

const ResumeWorkspaceActions = () => {
    const { openModal, modalState } = useModal();

    const isMyModal = Object.values(CARD_ACTION_TYPES).includes(modalState.type);

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ResumeCardActions.map((action) => (
                    <ResumeWorkspaceActionCard key={action.type} action={action} openModal={openModal} />
                ))}
            </div>

            {isMyModal && (
                <Modal>
                    <Modal.Header>
                        {modalState.type === CARD_ACTION_TYPES.RESUME && 'Resume Management'}
                        {modalState.type === CARD_ACTION_TYPES.VIEW_PROFILE && 'Profile Details'}
                        {modalState.type === CARD_ACTION_TYPES.ADD_PROFILE && 'Add New Profile'}
                    </Modal.Header>
                    <Modal.Body>
                        <Suspense fallback={<Loader />}>
                            <div className="min-h-[200px] flex items-center justify-center text-gray-500">
                                {modalState.type === CARD_ACTION_TYPES.RESUME && <AddResume />}
                                {modalState.type === CARD_ACTION_TYPES.VIEW_PROFILE && <ViewProfile />}
                                {modalState.type === CARD_ACTION_TYPES.ADD_PROFILE && <AddProfile />}
                            </div>
                        </Suspense>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default ResumeWorkspaceActions;
