"use client";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hook";
import { setLoading } from "@/redux/slices/globalSlice";
import { SectionType, DefaultPageDataType, AboutDataType, QuotationDataType } from "@/types/type";
import { GET } from "@/app/api/_get/section";

// Define types for each section
type SectionDataType = {
    about: AboutDataType;
    quotation: QuotationDataType;
};

// Helper type to handle default cases
type DefaultSectionType<T> = T extends keyof SectionDataType ? SectionDataType[T] : DefaultPageDataType;

export const useSectionData = <T extends keyof SectionDataType | string>(slug: T) => {
    const [data, setData] = useState<DefaultSectionType<T> | null>(null);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const getSectionData = async () => {
        dispatch(setLoading(true));
        try {
            const res = await GET();
            const filteredSection = res.sections.find((section: SectionType) => section.slug === slug);
            if (!filteredSection) {
                throw new Error(`Section '${slug}' not found`);
            }
            setData(filteredSection as unknown as DefaultSectionType<T>);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch section data");
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (!data) getSectionData();
    }, [data, slug]);

    return { data, error };
};
