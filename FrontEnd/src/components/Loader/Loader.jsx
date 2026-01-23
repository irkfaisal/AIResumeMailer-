import React from 'react';

export default function Loader() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-20 h-20">
                {/* Outer spinning ring */}
                <div className="absolute inset-0 border-4 border-transparent border-t-[#33bbcf] border-r-[#33bbcf] rounded-full animate-spin"></div>

                {/* Middle spinning ring - opposite direction */}
                <div className="absolute inset-2 border-4 border-transparent border-b-[#33bbcf] border-l-[#33bbcf] rounded-full animate-spin-reverse"></div>

                {/* Inner pulsing dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#33bbcf] rounded-full animate-pulse"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full blur-md bg-[#33bbcf] opacity-20 animate-pulse"></div>
            </div>
        </div>
    );
};
