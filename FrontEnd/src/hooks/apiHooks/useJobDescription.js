import { useState } from "react";
import {
    addJobDescription,
    getAllJobDescriptions,
} from "../../services/jobDescription.service";

export const useJobDescription = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJobs = async () => {
        try {
            setLoading(true);
            const res = await getAllJobDescriptions();
            setJobs(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const addJob = async (payload) => {
        setLoading(true);
        try {
            const res = await addJobDescription(payload);
            if (!res.success) {
                setError(res.message);
                throw new Error(res.message);
            }
            setJobs((prev) => [res.data, ...prev]);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        jobs,
        loading,
        error,
        fetchJobs,
        addJob,
    };
};
