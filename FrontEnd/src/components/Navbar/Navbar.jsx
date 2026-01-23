import { Link } from "react-router-dom";
import ProfilePopup from "./ProfilePopup";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <div>
                <h1 className="font-poppins font-semibold text-2xl text-white">
                    AiResumeMailer
                </h1>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-8">
                <Link to="/dashboard" className="nav-link">
                    Dashboard
                </Link>

                <Link to="/resume-workspace" className="nav-link">
                    Resume Workspace
                </Link>

                <Link to="/about" className="nav-link">
                    About
                </Link>

                <Link to="/contact" className="nav-link">
                    Contact
                </Link>

                <Link to="/login" className="nav-link">
                    Login
                </Link>

                <ProfilePopup />
            </div>
        </nav>
    );
};

export default Navbar;
