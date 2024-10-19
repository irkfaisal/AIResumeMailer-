// import React from 'react'

import { Navbar } from "../../../components"
import styles from "../../../styles/styles"
// import styles from "../../../styles/styles"
import HeroBanner from "./HeroBanner/HeroBanner"

const LandingPage = () => {
    return (
        <>
            <section className={`w-full h-screen ${styles.flexCenter} flex-col`}>
                <Navbar />
                <HeroBanner />
            </section>
        </>
    )
}

export default LandingPage