import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

export default function AddResume() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [resumeData, setResumeData] = useState({
        name: '',
        date: ''
    });

    useEffect(() => {
        const storedResume = localStorage.getItem('lastUploadedResume');
        if (storedResume) {
            setResumeData(JSON.parse(storedResume));
        }
    }, []);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (!selectedFile) {
            toast.error("Please select a file first.");
            return;
        }

        const currentDate = new Date().toLocaleString();
        const newResumeData = {
            name: selectedFile.name,
            date: currentDate
        };

        // Persist to localStorage
        localStorage.setItem('lastUploadedResume', JSON.stringify(newResumeData));
        setResumeData(newResumeData);

        toast.success("Resume uploaded successfully!");
        setSelectedFile(null); // Reset file input

        // Reset the actual input element
        const fileInput = document.getElementById('resume-upload-input');
        if (fileInput) {
            fileInput.value = '';
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Add Resume</h1>

            {/* Previous Upload Section */}
            {resumeData.name && (
                <div className="mb-8 p-4 bg-gray-50 rounded-md border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Previously Uploaded</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600">
                        <span className="font-medium text-blue-600 truncate max-w-xs" title={resumeData.name}>
                            📄 {resumeData.name}
                        </span>
                        <span className="text-sm mt-1 sm:mt-0">
                            Uploaded on: {resumeData.date}
                        </span>
                    </div>
                </div>
            )}

            {/* Upload Section */}
            <div className="flex flex-col gap-4">
                <label className="block">
                    <span className="sr-only">Choose resume</span>
                    <input
                        id="resume-upload-input"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100
                        cursor-pointer"
                    />
                </label>

                <div className="mt-4">
                    <button
                        onClick={handleUpload}
                        className="px-8 py-2 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5ce1e6]"
                        style={{ backgroundColor: '#5ce1e6' }}
                    >
                        Upload Resume
                    </button>
                    {selectedFile && (
                        <span className="ml-3 text-sm text-gray-500">
                            Selected: {selectedFile.name}
                        </span>
                    )}
                </div>
            </div>

            <div className="mt-6 text-xs text-gray-400">
                * Uploading a new resume will update the 'Previously Uploaded' status.
            </div>
        </div>
    );
}