import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Login() {
    const { isAuthenticated } = useAuth();

    // If already logged in, redirect to dashboard
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    const handleGoogleLogin = () => {
        // Add Google SSO login functionality here
        console.log('Initiating Google SSO login...');
        window.location.href = import.meta.env.VITE_API_URL + '/auth/google';
    };

    return (
        <div className="flex items-center justify-center min-h-screen gradient__bg">
            <div className="w-full max-w-md p-12 space-y-8">
                {/* Logo/Title Section */}
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold text-white font-poppins">
                        Welcome
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Sign in to continue to AI Resume Mailer
                    </p>
                </div>

                {/* Google SSO Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleGoogleLogin}
                        className="group relative flex items-center justify-center gap-4 px-8 py-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full max-w-sm"
                    >
                        {/* Google Logo */}
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>

                        {/* Button Text */}
                        <span className="text-gray-700 font-semibold text-lg font-poppins">
                            Continue with Google
                        </span>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </button>
                </div>

                {/* Optional: Additional Info */}
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        By continuing, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    );
};