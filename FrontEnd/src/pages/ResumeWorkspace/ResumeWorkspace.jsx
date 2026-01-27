import { lazy, Suspense, useState } from 'react';
import styles from '../../styles/styles';
import AddJobDescription from './AddJobDescription/AddJobDescription';
import ResumeWorkspaceActions from './ResumeWorkspaceActions/ResumeWorkspaceActions';
import Loader from '../../components/Loader/Loader';

const MailTextEditor = lazy(() => import("./MailTextEditor/MailTextEditor"));

export default function ResumeWorkspace() {
    const [emailBody, setEmailBody] = useState('');

    return (
        <div className={`gradient__bg w-screen min-h-screen overflow-y-auto overflow-x-hidden ${styles.flexStart} flex-col`}>
            <div className={`${styles.paddingX} ${styles.paddingY} w-full ${styles.boxWidth} mx-auto`}>
                <h1 className="text-white font-bold text-4xl mb-10 border-b border-gray-700 pb-4">
                    Resume Workspace
                </h1>

                <ResumeWorkspaceActions />

                {/* Job Description Card - Centered below the 3-card grid */}
                <div className="mt-12 flex justify-center">
                    <div className="w-full md:w-1/3">
                        <AddJobDescription />
                    </div>
                </div>
                <Suspense fallback={<Loader />}>  {/* <EditorSkeleton /> in future */}
                    <div className='mt-12 flex justify-center'>
                        <div className='w-full md:w-1/3'>
                            <MailTextEditor
                                value={emailBody}
                                onChange={setEmailBody}
                            />
                        </div>
                    </div>
                </Suspense>
            </div>
        </div>
    )
};