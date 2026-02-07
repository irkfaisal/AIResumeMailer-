import { useState } from "react";
import { toast } from 'sonner';
import {
    uploadResumeMetadata,
    getResumeDetails,
    addCoverLetter,
    getCoverLetter,
} from "../../services/resume.service";

export const useResume = () => {
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState(null);
    const [resumeLoading, setResumeLoading] = useState(false);
    const [coverLetterLoading, setCoverLetterLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchResume = async () => {
        setResumeLoading(true);
        try {
            const res = await getResumeDetails();
            if (!res.success) {
                setError(res.message);
                throw new Error(res.message);
            }
            // console.log("res.data resume", res.data)
            setResume(res.data);
            localStorage.setItem('resume', JSON.stringify(res.data));
            toast.success("Resume fetched successfully!");
        } catch (err) {
            setError(err);
            setResume(null);
            localStorage.removeItem('resume');
            toast.error("Failed to fetch resume!");
            throw err;
        } finally {
            setResumeLoading(false);
        }
    };

    const uploadResume = async (payload) => {
        setResumeLoading(true);
        try {
            const res = await uploadResumeMetadata(payload);
            if (!res.success) {
                setError(res.message);
                throw new Error(res.message);
            }
            setResume(res.data);
            localStorage.setItem('resume', JSON.stringify(res.data));
            toast.success("Resume uploaded successfully!");
        } catch (err) {
            setResume(null);
            setError(err);
            toast.error("Failed to upload resume!");
            throw err;
        } finally {
            setResumeLoading(false);
        }
    };

    const fetchCoverLetter = async () => {
        setCoverLetterLoading(true);
        try {
            const res = await getCoverLetter();
            if (!res.success) {
                setError(res.message);
                throw new Error(res.message);
            }
            // console.log("res.data coverLetter", res.data)
            setCoverLetter(res.data);
            localStorage.setItem('coverLetter', JSON.stringify(res.data));
            toast.success("Cover letter fetched successfully!");
        } catch (err) {
            setError(err);
            setCoverLetter(null);
            localStorage.removeItem('coverLetter');
            toast.error("Failed to fetch cover letter!");
            throw err;
        } finally {
            setCoverLetterLoading(false);
        }
    };

    const uploadCoverLetter = async (payload) => {
        setCoverLetterLoading(true);
        try {
            const res = await addCoverLetter(payload);
            if (!res.success) {
                setError(res.message);
                throw new Error(res.message);
            }
            setCoverLetter(res.data);
            localStorage.setItem('coverLetter', JSON.stringify(res.data));
            toast.success("Cover letter uploaded successfully!");
        } catch (err) {
            setCoverLetter(null);
            setError(err);
            toast.error("Failed to upload cover letter!");
            throw err;
        } finally {
            setCoverLetterLoading(false);
        }
    };

    return {
        resume,
        setResume,
        coverLetter,
        setCoverLetter,
        resumeLoading,
        coverLetterLoading,
        error,
        fetchResume,
        fetchCoverLetter,
        uploadResume,
        uploadCoverLetter,
    };
};
