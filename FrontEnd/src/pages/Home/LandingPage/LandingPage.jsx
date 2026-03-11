// import React from 'react'

import { Navbar } from "../../../components"
import { authAPI } from "../../../services/auth"
import styles from "../../../styles/styles"
// import styles from "../../../styles/styles"
import HeroBanner from "./HeroBanner/HeroBanner"
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <section className={`w-full h-screen relative ${styles.flexCenter} flex-col`}>
                <Navbar />
                <HeroBanner />
                <div className="absolute bottom-6 flex gap-6 text-white text-sm opacity-80">
                    <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
                </div>
            </section >
        </>
    )
}

export default LandingPage