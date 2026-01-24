import styles from '../../styles/styles';
import ResumeWorkspaceActions from './ResumeWorkspaceActions/ResumeWorkspaceActions';

export default function ResumeWorkspace() {
    return (
        <div className={`gradient__bg w-screen min-h-screen overflow-y-auto overflow-x-hidden ${styles.flexStart} flex-col`}>
            <div className={`${styles.paddingX} ${styles.paddingY} w-full ${styles.boxWidth} mx-auto`}>
                <h1 className="text-white font-bold text-4xl mb-10 border-b border-gray-700 pb-4">
                    Resume Workspace
                </h1>

                <ResumeWorkspaceActions />

                <div className="mt-12 text-white/50 text-center">
                    {/* Other components */}
                </div>
            </div>
        </div>
    )
};