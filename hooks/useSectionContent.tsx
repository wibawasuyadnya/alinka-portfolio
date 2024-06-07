// src/hooks/useSectionContent.ts
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hook";
import { setLoading } from "@/redux/slices/globalSlice";
import { getSectionContent } from "@/app/api/_get/route";
import { SectionContentType, SectionType } from "@/types/type";

export const useSectionContent = (slug: string) => {
  const [section, setSection] = useState<SectionType | null>(null);
  const dispatch = useAppDispatch();
  
  // fetching section content from graphql api
  const fetchSectionContent = async () => {
    dispatch(setLoading(true));
    try {
      const res = await getSectionContent();
      const sections: SectionContentType = res.sections;
      const filteredSection = sections.find((section) => section.slug === slug);
      setSection(filteredSection || null);
      dispatch(setLoading(false));
    } catch (err) {
      console.error(err);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchSectionContent();
  }, [slug]);

  return section;
};
