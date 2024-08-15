"use client"
import { GET } from "@/app/api/_get/posts";
import { Language } from "@/types/enum";
import { PostsListType } from "@/types/type";

type PostsDataReturnType = {
    data: PostsListType | null;
    error: Error | null;
};

export const usePostsData = async (language: Language): Promise<PostsDataReturnType> => {
    try {
        const { posts } = await GET({ language });
        return { data: posts, error: null };
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return { data: null, error: error as Error };
    }
};
