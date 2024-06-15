"use client";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hook";
import { setLoading } from "@/redux/slices/globalSlice";
import { ImagesDataType } from "@/types/type";
import { GET } from "@/app/api/_get/imageGallery";

export const useImageGalleryData = () => {
    const [data, setData] = useState<ImagesDataType | null>(null);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const getImageGalleryData = async () => {
        dispatch(setLoading(true));
        try {
            const res = await GET();
            setData(res.arts);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch gallery data");
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (!data) getImageGalleryData();
    }, [data]);

    return { data, error };
};
