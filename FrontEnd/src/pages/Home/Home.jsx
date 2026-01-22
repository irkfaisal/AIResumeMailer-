import '../../App.css';
import Loader from '../../components/Loader/Loader';
import styles from '../../styles/styles';
import LandingPage from './LandingPage/LandingPage';

export default function Home() {
    return (
        <>
            <div className={`gradient__bg w-screen min-h-screen overflow-hidden ${styles.flexCenter} flex-col gap-2`}>
                <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth}`}>
                    <LandingPage />
                </div>
            </div>
        </>
    )
}