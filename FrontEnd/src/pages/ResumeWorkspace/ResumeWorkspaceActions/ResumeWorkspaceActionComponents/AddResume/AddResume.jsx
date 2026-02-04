import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useResume } from '../../../../../hooks/apiHooks/useResume';
import FileUploadCard from '../../../../../components/FileUploadCard.jsx/FileUploadCard';

export default function AddResume() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);
    const { uploadResume, loading, resume, fetchResume } = useResume();

    const [resumeData, setResumeData] = useState({
        name: '',
        date: ''
    });

    const [coverData, setCoverData] = useState({
        name: '',
        date: ''
    });

    useEffect(() => {
        const storedResume = localStorage.getItem('lastUploadedResume');
        if (!storedResume) {
            const res = getResume()
            if (res) {
                setResumeData({
                    name: res.originalName,
                    date: new Date(res.updatedAt || Date.now()).toLocaleString()
                });
            }
        }
        setResumeData(JSON.parse(storedResume));
    }, []);

    const getResume = async () => {
        const res = await fetchResume()
        return res
    }

    useEffect(() => {
        if (resume) {
            setResumeData({
                name: resume.originalName,
                date: new Date(resume.updatedAt || Date.now()).toLocaleString()
            });
        }
    }, [resume]);


    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            toast.error("Please select a file first.");
            return;
        }

        const payload = {
            originalName: selectedFile.name,
            storedName: selectedFile.name,
            mimeType: selectedFile.type,
            size: selectedFile.size
        };

        try {
            const res = await uploadResume(payload);

            if (!res || res.success === false) {
                throw new Error("Upload failed");
            }

            const newResumeData = {
                name: selectedFile.name,
                date: new Date().toISOString()
            };

            setResumeData(newResumeData);
            setSelectedFile(null);

            try {
                localStorage.setItem('lastUploadedResume', JSON.stringify(newResumeData));
            } catch (e) {
                console.warn("localStorage failed", e);
            }

            toast.success("Resume uploaded successfully!");

        } catch (error) {
            console.error("Upload failed:", error);
            setResumeData({
                name: "",
                date: ""
            });
            toast.error("Failed to upload resume.");
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
            {/* <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Add Resume & Cover-Letter</h1> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUploadCard
                    title="Add Resume"
                    uploadLabel="Upload Resume"
                    previouslyUploaded={resumeData}
                    onFileChange={handleFileChange}
                    onUpload={handleUpload}
                    selectedFile={selectedFile}
                    loading={loading}
                    inputId="resume-upload-input"
                />

                <FileUploadCard
                    title="Add Cover Letter"
                    uploadLabel="Upload Cover Letter"
                    previouslyUploaded={coverData}
                    selectedFile={coverFile}
                    loading={loading.cover}
                    inputId="cover-upload-input"
                    onFileChange={(e) => setCoverFile(e.target.files[0])}
                    onUpload={() => handleUpload('cover')}
                />
            </div>

            {/* <div id="resume-upload-div">
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
                            disabled={loading}
                            className={`px-8 py-2 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5ce1e6] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            style={{ backgroundColor: '#5ce1e6' }}
                        >
                            {loading ? 'Uploading...' : 'Upload Resume'}
                        </button>
                        {selectedFile && (
                            <span className="ml-3 text-sm text-gray-500">
                                Selected: {selectedFile.name}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div id="cover-letter-upload-div">
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

                <div className="flex flex-col gap-4">
                    <label className="block">
                        <span className="sr-only">Choose Cover-Letter</span>
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
                            disabled={loading}
                            className={`px-8 py-2 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5ce1e6] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            style={{ backgroundColor: '#5ce1e6' }}
                        >
                            {loading ? 'Uploading...' : 'Upload Cover-Letter'}
                        </button>
                        {selectedFile && (
                            <span className="ml-3 text-sm text-gray-500">
                                Selected: {selectedFile.name}
                            </span>
                        )}
                    </div>
                </div>
            </div> */}
        </div>
    );
}
