import { lazy, Suspense } from 'react';
import { Modal } from '../../../components';
import { CARD_ACTION_TYPES, ResumeCardActions } from '../../../constants/constant';
import { useModal } from '../../../hooks/useModal';
import Loader from '../../../components/Loader/Loader';

const AddProfile = lazy(() => import('./ResumeWorkspaceActionComponents/AddProfile/AddProfile'));
const AddResume = lazy(() => import('./ResumeWorkspaceActionComponents/AddResume/AddResume'));
const ResumeWorkspaceActionCard = lazy(() => import('./ResumeWorkspaceActionComponents/ResumeWorkspaceActionCard'));
const ViewProfile = lazy(() => import('./ResumeWorkspaceActionComponents/ViewProfile/ViewProfile'));

const MODAL_CONFIG = {
    [CARD_ACTION_TYPES.RESUME]: {
        title: 'Add Resume',
        size: '2xl',
        component: AddResume,
    },
    [CARD_ACTION_TYPES.VIEW_PROFILE]: {
        title: 'Profile Details',
        size: 'full',
        component: ViewProfile,
    },
    [CARD_ACTION_TYPES.ADD_PROFILE]: {
        title: 'Add New Profile',
        size: '2xl',
        component: AddProfile,
    },
};


const ResumeWorkspaceActions = () => {
    const { openModal, modalState } = useModal();

    const isMyModal = Object.values(CARD_ACTION_TYPES).includes(modalState.type);
    const modalConfig = MODAL_CONFIG[modalState.type];

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ResumeCardActions.map((action) => (
                    <ResumeWorkspaceActionCard key={action.type} action={action} openModal={openModal} />
                ))}
            </div>

            {isMyModal && (
                <Modal size={modalConfig?.size || 'md'}>
                    <Modal.Header>{modalConfig?.title}</Modal.Header>
                    <Modal.Body>
                        <Suspense fallback={<Loader />}>
                            <div className="flex items-center justify-center p-2 text-gray-500">
                                {modalConfig && <modalConfig.component />}
                            </div>
                        </Suspense>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default ResumeWorkspaceActions;
