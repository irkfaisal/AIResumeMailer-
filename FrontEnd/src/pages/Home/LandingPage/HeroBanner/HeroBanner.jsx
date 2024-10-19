import { img4 } from "../../../../assets"
import styles from "../../../../styles/styles"

const HeroBanner = () => {
    return (
        <>
            <div className={`w-full h-screen ${styles.flexCenter}`} >
                <div className={`heroBanner-content w-1/2 text-start`}>
                    <h1 className='gradient__text text-nowrap'>Automate your Job apply with AI</h1>
                    <p>Save time, apply smarter and get hired faster.</p>
                    <p>Use AI to create tailored emails for recruiters in just a few clicks.</p>
                </div>
                <div
                    className={`heroBanner-image w-1/2 bg-transparent ${styles.flexCenter}`}>
                    <div
                        className={`h-[400px] w-[400px] bg-transparent ${styles.flexCenter}`}
                        style={{
                            border: "2px solid white",
                            borderRadius: "50%",
                            boxShadow: "0 0 20px 10px #33bbcf",
                        }}
                    >
                        <img src={img4} className="h-60 w-60" alt="mail-logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner