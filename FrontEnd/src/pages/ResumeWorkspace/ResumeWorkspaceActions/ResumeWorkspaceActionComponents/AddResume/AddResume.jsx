import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useResume } from '../../../../../hooks/apiHooks/useResume';
import FileUploadCard from '../../../../../components/FileUploadCard.jsx/FileUploadCard';

export default function AddResume() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);
    const { uploadResume, uploadCoverLetter, resumeLoading, coverLetterLoading, resume, setResume, coverLetter, setCoverLetter, fetchResume, fetchCoverLetter } = useResume();

    useEffect(() => {
        const storedResume = localStorage.getItem('resume');
        if (!storedResume) {
            fetchResume().catch(() => { });
        } else {
            setResume(JSON.parse(storedResume));
        }
    }, []);

    useEffect(() => {
        const storedCoverLetter = localStorage.getItem('coverLetter');
        if (!storedCoverLetter) {
            fetchCoverLetter().catch(() => { });
        } else {
            setCoverLetter(JSON.parse(storedCoverLetter));
        }
    }, []);


    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUpload = (type = 'resume') => {
        const fileToUpload = type === 'resume' ? selectedFile : coverFile;

        if (!fileToUpload) {
            toast.error(`Please select a ${type === 'resume' ? 'resume' : 'cover letter'} first.`);
            return;
        }

        try {
            if (type === 'resume') {
                const payload = {
                    originalName: fileToUpload.name,
                    storedName: fileToUpload.name,
                    mimeType: fileToUpload.type,
                    size: fileToUpload.size
                };
                uploadResume(payload);
            } else {
                const payload = {
                    coverLetter: fileToUpload.name,
                    coverLetterStoredName: fileToUpload.name
                };
                uploadCoverLetter(payload);
            }
        } catch (error) {
            console.error("Upload failed:", error);
            toast.error(`Failed to upload ${type === 'resume' ? 'resume' : 'cover letter'}.`);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
            {/* <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Add Resume & Cover-Letter</h1> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUploadCard
                    title="Add Resume"
                    uploadLabel="Upload Resume"
                    previouslyUploaded={resume}
                    onFileChange={handleFileChange}
                    onUpload={() => handleUpload('resume')}
                    selectedFile={selectedFile}
                    loading={resumeLoading}
                    inputId="resume-upload-input"
                />

                <FileUploadCard
                    title="Add Cover Letter"
                    uploadLabel="Upload Cover Letter"
                    previouslyUploaded={coverLetter}
                    selectedFile={coverFile}
                    loading={coverLetterLoading}
                    inputId="cover-upload-input"
                    onFileChange={(e) => setCoverFile(e.target.files[0])}
                    onUpload={() => handleUpload('cover')}
                />
            </div>
        </div>
    );
}
