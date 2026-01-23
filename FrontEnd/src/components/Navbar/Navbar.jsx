import { Link } from 'react-router-dom';
import ProfilePopup from './ProfilePopup';

const Navbar = () => {
    return (
        <section className="w-full flex justify-between items-start">
            <div className="w-1/2">
                <h1 className="font-poppins font-semibold text-[32px] text-white xs:leading-[76.8px] leading-[66.8px]">
                    AiResumeMailer
                </h1>
            </div>
            <div className="w-1/2 flex justify-end items-center gap-8">
                <Link to="/dashboard">
                    <h1 className="font-poppins font-semibold text-[20px] text-white xs:leading-[76.8px] leading-[66.8px]">
                        Dashboard
                    </h1>
                </Link>
                <Link to="/about">
                    <h1 className="font-poppins font-semibold text-[20px] text-white xs:leading-[76.8px] leading-[66.8px]">
                        About
                    </h1>
                </Link>
                <Link to="/contact">
                    <h1 className="font-poppins font-semibold text-[20px] text-white xs:leading-[76.8px] leading-[66.8px]">
                        Contact
                    </h1>
                </Link>
                <Link to="/login">
                    <h1 className="font-poppins font-semibold text-[20px] text-white xs:leading-[76.8px] leading-[66.8px]">
                        Login
                    </h1>
                </Link>
                <ProfilePopup />
            </div>
        </section>
    );
};

export default Navbar;
