import { lazy, Suspense } from 'react';
import { Modal } from '../../../components';
import { useModal } from '../../../hooks/useModal';
import Loader from '../../../components/Loader/Loader';

const AddJobDescriptionForm = lazy(() => import('./AddJobDescriptionWorkspace/AddJobDescriptionForm'));

const JOB_DESCRIPTION_MODAL = 'JOB_DESCRIPTION';

export default function AddJobDescription() {
    const { openModal, modalState } = useModal();

    const handleOpenModal = () => {
        openModal(JOB_DESCRIPTION_MODAL);
    };

    const isJobDescriptionModal = modalState.type === JOB_DESCRIPTION_MODAL && modalState.isOpen;

    return (
        <>
            {/* Card Component */}
            <div
                onClick={handleOpenModal}
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-[#5ce1e6] group"
            >
                <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
                        📝
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#5ce1e6] transition-colors">
                        Add Job Description
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Add job details to generate AI-powered cover letters and applications
                    </p>

                    {/* CTA Indicator */}
                    <div className="mt-4 flex items-center gap-2 text-[#5ce1e6] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Click to add</span>
                        <span className="text-lg">→</span>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isJobDescriptionModal && (
                <Modal size="2xl">
                    <Modal.Content>
                        <Modal.Header>Add Job Description</Modal.Header>
                        <Modal.Body>
                            <Suspense fallback={<Loader />}>
                                <AddJobDescriptionForm />
                            </Suspense>
                        </Modal.Body>
                    </Modal.Content>
                </Modal>
            )}
        </>
    );
}