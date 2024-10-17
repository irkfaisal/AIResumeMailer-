import '../../App.css';
import styles from '../../styles/styles';
import LandingPage from './LandingPage/LandingPage';

const Home = () => {
    return (
        <>
            <div className={`gradient__bg w-screen min-h-screen overflow-hidden flex flex-col justify-start items-center`}>
                <div className={`${styles.paddingX} ${styles.flexStart} ${styles.boxWidth}`}>
                    <LandingPage />
                </div>
            </div>
        </>
    )
}

export default Home