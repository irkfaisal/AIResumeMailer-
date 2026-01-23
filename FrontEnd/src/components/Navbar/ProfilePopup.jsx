import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/auth.jsx';

const ProfilePopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { user, logout, isAuthenticated } = useAuth();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        await logout();
        setIsOpen(false);
    };

    // Don't render if user is not authenticated
    if (!isAuthenticated || !user) {
        return null;
    }

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Profile Button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center duration-300 group"
            >
                {/* Profile Picture */}
                <div className="relative">
                    <img
                        src={user.picture || user.profilePicture || 'https://via.placeholder.com/40'}
                        alt={user.displayName || user.name || 'User'}
                        className="w-10 h-10 rounded-full border-2 border-white/30 object-cover"
                    />
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 glass-effect rounded-lg shadow-lg overflow-hidden z-50 animate-fadeIn">
                    {/* User Info Section */}
                    <div className="px-4 py-3 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <img
                                src={user.picture || user.profilePicture || 'https://via.placeholder.com/48'}
                                alt={user.displayName || user.name || 'User'}
                                className="w-12 h-12 rounded-full border-2 border-white/30 object-cover"
                            />
                            <div className="flex-1">
                                <p className="font-poppins font-semibold text-[14px] text-white">
                                    {user.displayName || user.name || 'User'}
                                </p>
                                <p className="font-poppins text-[12px] text-gray-300 truncate">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                        <button
                            onClick={handleLogout}
                            className="w-full px-4 py-2 text-left font-poppins text-[14px] text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePopup;
