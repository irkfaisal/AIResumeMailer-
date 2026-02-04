import { useState } from "react";
import {
    uploadResumeMetadata,
    getResumeDetails,
    addCoverLetter,
} from "../../services/resume.service";

export const useResume = () => {
    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchResume = async () => {
        setLoading(true);
        try {
            const res = await getResumeDetails();
            setResume(res);
            return res;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const uploadResume = async (payload) => {
        setLoading(true);
        try {
            const res = await uploadResumeMetadata(payload);
            setResume(res);
            return res;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };


    const saveCoverLetter = async (payload) => {
        setLoading(true);
        try {
            const res = await addCoverLetter(payload);
            setResume(res);
            return res;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        resume,
        loading,
        error,
        fetchResume,
        uploadResume,
        saveCoverLetter,
    };
};
