"use client";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hook";
import { setLoading } from "@/redux/slices/globalSlice";
import { ImageDetailType } from "@/types/type";
import { GET } from "@/app/api/_get/imageDetail";

export const useImageDetailData = ({ id }: { id: string }) => {
    const [data, setData] = useState<ImageDetailType | null>(null);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const getImageDetailData = async () => {
        dispatch(setLoading(true));
        try {
            const res = await GET({ id });
            setData(res.art);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch image detail data");
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (!data) getImageDetailData();
    }, [data]);

    return { data, error };
};
