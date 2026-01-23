import styles from '../../styles/styles';
import WorkspaceActions from './WorkspaceActions';

export default function ResumeWorkspace() {
    return (
        <div className={`gradient__bg w-screen min-h-screen overflow-y-auto overflow-x-hidden ${styles.flexStart} flex-col`}>
            <div className={`${styles.paddingX} ${styles.paddingY} w-full ${styles.boxWidth} mx-auto`}>
                <h1 className="text-white font-bold text-4xl mb-10 border-b border-gray-700 pb-4">
                    Resume Workspace
                </h1>

                <WorkspaceActions />

                {/* Future components will go here */}
                <div className="mt-12 text-white/50 text-center">
                    More components coming soon...
                </div>
            </div>
        </div>
    )
};