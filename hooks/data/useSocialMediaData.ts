"use client";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hook";
import { setLoading } from "@/redux/slices/globalSlice";
import { SocialDataType } from "@/types/type";
import { GET } from "@/app/api/_get/social";

export const useSocialData = () => {
    const [data, setData] = useState<SocialDataType[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const getSocialData = async () => {
        dispatch(setLoading(true));
        try {
            const res = await GET();
            setData(res.socials);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch social data");
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (!data) getSocialData();
    }, [data]);

    return { data, error };
};
