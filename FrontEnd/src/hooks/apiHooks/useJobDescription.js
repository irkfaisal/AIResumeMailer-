import { useState } from "react";
import {
    addJobDescription,
    getAllJobDescriptions,
} from "../../services/jobDescription.service";
import { toast } from 'sonner';

export const useJobDescription = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const res = await getAllJobDescriptions();
            if (!res.success) {
                setError(res.message);
                throw new Error(res.message);
            }
            setJobs(res.data);
            localStorage.setItem("JobDescription", JSON.stringify(res.data));
        } catch (err) {
            setJobs([]);
            localStorage.removeItem("JobDescription");
            setError(err);
            throw err;
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
            localStorage.setItem("JobDescription", JSON.stringify([res.data, ...jobs]));
            toast.success(res.message);
        } catch (err) {
            setError(err);
            setJobs([]);
            localStorage.removeItem("JobDescription");
            toast.error(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        jobs,
        setJobs,
        loading,
        error,
        fetchJobs,
        addJob,
    };
};
