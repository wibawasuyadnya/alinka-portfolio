import { gqlKey } from "@/key/graphqlkey";
import { gql, request } from 'graphql-request';
import { PostsListType } from "@/types/type";
import { Language } from "@/types/enum";

/**
 * GraphQL query to fetch image detail 
 */
const fetchPostList = gql`
  query Posts($language:Locale!) {
    posts(locales: [$language]) {
      id
      content
      tags
      title
      slug
      publishedAt
    }
  }`
  ;

/**
 * Exported function named GET to fetch posts detail data using GraphQL
 */
export const GET = async ({ language }: { language: Language }): Promise<{ posts: PostsListType }> => {
  try {
    const variables = { language };
    const result = await request<{ posts: PostsListType }>(gqlKey, fetchPostList, variables);
    return result;
  } catch (error) {
    console.error('Failed to fetch post list:', error);
    throw new Error('Failed to fetch post list');
  }
};
