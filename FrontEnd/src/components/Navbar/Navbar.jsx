const Navbar = () => {
    return (
        <>
            <section className="w-full flex justify-between items-start">
                <div className="w-1/2">
                    <h1 className={`font-poppins font-semibold text-[32px] text-white xs:leading-[76.8px] leading-[66.8px]`}>AiResumeMailer</h1>
                </div>
                <div className="w-1/2 flex justify-end items-center gap-8">
                    <h1 className={`font-poppins font-semibold text-[20px] text-white xs:leading-[76.8px] leading-[66.8px]`}>Dashboard</h1>
                    <h1 className={`font-poppins font-semibold text-[20px] text-white xs:leading-[76.8px] leading-[66.8px]`}>About</h1>
                    <h1 className={`font-poppins font-semibold text-[20px] text-white xs:leading-[76.8px] leading-[66.8px]`}>Contact us</h1>
                    <h1 className={`font-poppins font-semibold text-[20px] text-white xs:leading-[76.8px] leading-[66.8px]`}>Login</h1>
                </div>
            </section>
        </>
    )
}

export default Navbar