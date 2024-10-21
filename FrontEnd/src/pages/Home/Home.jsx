import '../../App.css';
import styles from '../../styles/styles';
import LandingPage from './LandingPage/LandingPage';
import ResumeForm from './ResumeForm/ResumeForm';
import SendMail from './SendMail/SendMail';

const Home = () => {
    return (
        <>
            <div className={`gradient__bg w-screen min-h-screen overflow-hidden ${styles.flexCenter} flex-col gap-2`}>
                <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth}`}>
                    <LandingPage />
                </div>
                <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth}`}>
                    <ResumeForm />
                </div>
                <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth}`}>
                    <SendMail />
                </div>
            </div>
        </>
    )
}

export default Home