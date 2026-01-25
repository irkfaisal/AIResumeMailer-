import { useState } from 'react';

// Sample static profile data - replace with actual API data later
const sampleProfileData = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    linkedinLink: 'https://linkedin.com/in/johndoe',
    githubLink: 'https://github.com/johndoe',
    twitterLink: '', // Empty - should not display
    portfolioLink: 'https://johndoe.dev',
    articleLink: '', // Empty - should not display
    jobTitle: 'Senior Software Engineer',
    yearsOfExperience: 5,
    jobLocation: 'San Francisco, CA',
    skills: 'JavaScript, React, Node.js, Python, TypeScript',
    tools: 'VS Code, Git, Docker, AWS, Kubernetes',
    specialization: 'Full-Stack Development & Cloud Architecture',
    professionalSummary: 'Experienced software engineer with a passion for building scalable web applications and cloud-native solutions. Strong background in modern JavaScript frameworks and DevOps practices.',
    projectLink: 'https://github.com/johndoe/awesome-project',
    projectDescription: 'Built a real-time collaboration platform using React, Node.js, and WebSockets. Implemented microservices architecture with Docker and Kubernetes for scalability.',
    additionalInfo: 'AWS Certified Solutions Architect, Speaker at React Conf 2023',
};

// Field configuration with labels and sections
const profileFields = {
    basicDetails: [
        { key: 'fullName', label: 'Full Name', icon: '👤' },
        { key: 'email', label: 'Email Address', icon: '📧', isLink: true, linkPrefix: 'mailto:' },
        { key: 'phone', label: 'Phone Number', icon: '📱', isLink: true, linkPrefix: 'tel:' },
        { key: 'linkedinLink', label: 'LinkedIn Profile', icon: '💼', isLink: true },
        { key: 'githubLink', label: 'GitHub Profile', icon: '💻', isLink: true },
        { key: 'twitterLink', label: 'Twitter/X Profile', icon: '🐦', isLink: true },
        { key: 'portfolioLink', label: 'Portfolio Website', icon: '🌐', isLink: true },
        { key: 'articleLink', label: 'Article/Blog', icon: '📝', isLink: true },
    ],
    jobDetails: [
        { key: 'jobTitle', label: 'Current Job Title', icon: '💼' },
        { key: 'yearsOfExperience', label: 'Years of Experience', icon: '📊', suffix: ' years' },
        { key: 'jobLocation', label: 'Job Location', icon: '📍' },
    ],
    professionalDetails: [
        { key: 'skills', label: 'Skills', icon: '⚡', isMultiline: true },
        { key: 'tools', label: 'Tools & Technologies', icon: '🛠️', isMultiline: true },
        { key: 'specialization', label: 'Specialization', icon: '🎯' },
        { key: 'professionalSummary', label: 'Professional Summary', icon: '📄', isMultiline: true },
        { key: 'projectLink', label: 'Project Link', icon: '🔗', isLink: true },
        { key: 'projectDescription', label: 'Project Description', icon: '📋', isMultiline: true },
        { key: 'additionalInfo', label: 'Additional Information', icon: 'ℹ️', isMultiline: true },
    ],
};

// Component to render individual field
const ProfileField = ({ field, value }) => {
    const { label, icon, isLink, linkPrefix, suffix, isMultiline } = field;

    if (!value || (typeof value === 'string' && value.trim() === '')) {
        return null; // Don't render if no value
    }

    const displayValue = typeof value === 'number' ? value : value;
    const finalValue = suffix ? `${displayValue}${suffix}` : displayValue;

    return (
        <div className="mb-4 pb-4 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0">
            <div className="flex items-start gap-2">
                <span className="text-xl mt-0.5">{icon}</span>
                <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">{label}</h4>
                    {isLink ? (
                        <a
                            href={linkPrefix ? `${linkPrefix}${value}` : value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#5ce1e6] hover:text-[#4bc8cd] hover:underline break-all transition-colors"
                        >
                            {value}
                        </a>
                    ) : (
                        <p className={`text-gray-800 ${isMultiline ? 'whitespace-pre-line' : ''}`}>
                            {finalValue}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

// Component to render section
const ProfileSection = ({ title, fields, data }) => {
    // Check if section has any data
    const hasData = fields.some(field => {
        const value = data[field.key];
        return value && (typeof value !== 'string' || value.trim() !== '');
    });

    if (!hasData) {
        return null; // Don't render section if no fields have data
    }

    return (
        <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#5ce1e6]">
                {title}
            </h3>
            <div className="space-y-2">
                {fields.map(field => (
                    <ProfileField key={field.key} field={field} value={data[field.key]} />
                ))}
            </div>
        </div>
    );
};

export default function ViewProfile() {
    // In a real app, this would come from props, context, or API
    const [profileData] = useState(sampleProfileData);

    // Check if there's any profile data at all
    const hasAnyData = Object.values(profileData).some(value =>
        value && (typeof value !== 'string' || value.trim() !== '')
    );

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto mt-8">
            <div className="border-b pb-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">View Profile</h1>
                <p className="text-sm text-gray-500 mt-1">
                    Review your professional profile information
                </p>
            </div>

            {!hasAnyData ? (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">📋</div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                        No Profile Data Available
                    </h3>
                    <p className="text-gray-500">
                        Create a profile to see your information here.
                    </p>
                </div>
            ) : (
                <div className="space-y-6">
                    <ProfileSection
                        title="Basic Details"
                        fields={profileFields.basicDetails}
                        data={profileData}
                    />
                    <ProfileSection
                        title="Job Details"
                        fields={profileFields.jobDetails}
                        data={profileData}
                    />
                    <ProfileSection
                        title="Professional Details"
                        fields={profileFields.professionalDetails}
                        data={profileData}
                    />
                </div>
            )}

            {hasAnyData && (
                <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end gap-3">
                    <button
                        className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1"
                    >
                        Edit Profile
                    </button>
                    <button
                        className="px-6 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#4bc8cd] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5ce1e6] focus:ring-offset-1"
                    >
                        Download as PDF
                    </button>
                </div>
            )}
        </div>
    );
}