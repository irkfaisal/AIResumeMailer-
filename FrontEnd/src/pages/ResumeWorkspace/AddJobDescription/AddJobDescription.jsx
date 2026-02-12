import { lazy, Suspense } from 'react';
import { Modal } from '../../../components';
import { useModal } from '../../../hooks/useModal';
import Loader from '../../../components/Loader/Loader';
import { useJobDescription } from '../../../hooks/apiHooks/useJobDescription';

const AddJobDescriptionForm = lazy(() => import('./AddJobDescriptionWorkspace/AddJobDescriptionForm'));

const JOB_DESCRIPTION_MODAL = 'JOB_DESCRIPTION';

export default function AddJobDescription() {
    const { openModal, modalState, closeModal } = useModal();
    const { loading } = useJobDescription();

    const handleOpenModal = () => {
        openModal(JOB_DESCRIPTION_MODAL);
    };

    const JobStored = localStorage.getItem('JobDescription');


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
                <Modal size="xl">
                    <Modal.Content>
                        <Modal.Header>Add Job Description</Modal.Header>
                        <Modal.Body>
                            <Suspense fallback={<Loader />}>
                                <AddJobDescriptionForm />
                            </Suspense>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={closeModal} disabled={JobStored ? false : true}
                                    className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        localStorage.removeItem('JobDescription');
                                        window.location.reload();
                                    }}
                                    className="px-6 py-2 border border-red-300 text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1"
                                >
                                    Clear Storage
                                </button>
                                <button
                                    type="submit"
                                    form="add-job-description-form"
                                    disabled={loading}
                                    className={`px-6 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#4bc8cd] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5ce1e6] focus:ring-offset-1 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? 'Saving...' : 'Save Job Description'}
                                </button>
                            </div>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            )}
        </>
    );
}