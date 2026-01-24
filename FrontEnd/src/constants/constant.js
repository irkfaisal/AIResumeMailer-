export const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full mx-8'
};

// Input.jsx start
export const InputbaseClasses = "w-full rounded-md border outline-none transition";
export const InputsizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2",
    lg: "px-4 py-3 text-lg",
};

// export const InputstateClasses = error
//     ? "border-red-500 focus:ring-red-500"
//     : "border-gray-300 focus:ring-blue-500";

// Input.jsx closed

// ResumeWorkspace.jsx start

export const CARD_ACTION_TYPES = {
    RESUME: 'RESUME',
    VIEW_PROFILE: 'VIEW_PROFILE',
    ADD_PROFILE: 'ADD_PROFILE'
};

export const ResumeCardActions = [
    {
        title: 'Resume',
        type: CARD_ACTION_TYPES.RESUME,
        desc: 'Manage and update your resume details',
        icon: '📄'
    },
    {
        title: 'View Profile',
        type: CARD_ACTION_TYPES.VIEW_PROFILE,
        desc: 'View your existing profile information',
        icon: '👤'
    },
    {
        title: 'Add Profile',
        type: CARD_ACTION_TYPES.ADD_PROFILE,
        desc: 'Create a new profile for different roles',
        icon: '➕'
    }
];
// ResumeWorkspace.jsx end