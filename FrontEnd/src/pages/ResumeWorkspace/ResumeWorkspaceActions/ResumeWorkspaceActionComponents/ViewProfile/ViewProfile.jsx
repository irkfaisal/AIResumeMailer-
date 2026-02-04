import { useEffect, useState } from 'react';
import { useProfile } from '../../../../../hooks/apiHooks/useProfile';
import Loader from '../../../../../components/Loader/Loader';

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
    const { fetchProfile, profile: profileData, loading } = useProfile();

    useEffect(() => {
        fetchProfile();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-10">
                <div className="text-xl text-gray-600">
                    <Loader />
                </div>
            </div>
        );
    }

    const hasAnyData = profileData && Object.values(profileData).some(
        value => value && (typeof value !== 'string' || value.trim() !== '')
    );

    return (
        <div className="bg-white rounded-lg shadow-lg w-[90vw] max-w-6xl overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">View Profile</h1>
                    <p className="text-sm text-gray-500">
                        Review your professional profile information
                    </p>
                </div>

                {hasAnyData && (
                    <div className="flex gap-3">
                        <button className="px-5 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50">
                            Edit Profile
                        </button>
                        <button className="px-5 py-2 bg-[#5ce1e6] text-white font-semibold rounded-lg hover:bg-[#4bc8cd]">
                            Download PDF
                        </button>
                    </div>
                )}
            </div>

            {/* Body */}
            {!hasAnyData ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-4">📋</div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                        No Profile Data Available
                    </h3>
                    <p className="text-gray-500">
                        Create a profile to see your information here.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-[320px_1fr] h-[calc(100vh-30vh)]">

                    {/* LEFT COLUMN – fixed */}
                    <aside className="p-6 border-r overflow-hidden">
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
                    </aside>

                    {/* RIGHT COLUMN – scrollable */}
                    <section className="p-6 overflow-y-auto">
                        <ProfileSection
                            title="Professional Details"
                            fields={profileFields.professionalDetails}
                            data={profileData}
                        />
                    </section>

                </div>
            )}
        </div>
    );
}
