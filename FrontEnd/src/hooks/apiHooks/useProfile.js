import { useState } from "react";
import {
    getProfile,
    createOrUpdateProfile,
} from "../../services/profile.service";

export const useProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProfile = async () => {
        setLoading(true);
        try {
            const res = await getProfile();
            if (!res.success) {
                throw new Error(res.message);
            }
            setProfile(res.profile);
        } catch (err) {
            setError(err);
            throw new Error(err);
        } finally {
            setLoading(false);
        }
    };

    const saveProfile = async (payload) => {
        setLoading(true);
        try {
            const res = await createOrUpdateProfile(payload);
            if (!res.success) {
                throw new Error(res.message);
            }
            setProfile(res.data);
        } catch (err) {
            setError(err);
            throw new Error(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        profile,
        loading,
        error,
        fetchProfile,
        saveProfile,
    };
};
