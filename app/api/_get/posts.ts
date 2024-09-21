import { gqlKey } from "@/key/graphqlkey";
import { gql, request } from "graphql-request";
import { PostsListType } from "@/types/type";
import { Language } from "@/types/enum";

/**
 * GraphQL query to fetch posts
 */

const fetchPostList = gql`
  query Posts($language: Locale!, $search: String) {
    posts(locales: [$language], where: { _search: $search }) {
      id
      coverImage {
        url
      }
      createdBy {
        name
        isActive
      }
      authors {
        id
        bio
        name
        intro
        picture {
          url
        }
      }
      content
      tags
      title
      slug
      publishedAt
    }
  }
`;

/**
 * GraphQL query to fetch posts with tags
 */

const fetchPostListTags = gql`
  query Posts($language: Locale!, $tags: String!, $search: String) {
    posts(locales: [$language], where: { tags: [$tags], _search: $search }) {
      id
      coverImage {
        url
      }
      createdBy {
        name
        isActive
      }
      authors {
        id
        bio
        name
        intro
        picture {
          url
        }
      }
      content
      tags
      title
      slug
      publishedAt
    }
  }
`;
/**
 * Exported function named GET to fetch posts detail data using GraphQL
 */
export const GET = async ({
  language,
  tags,
  search = "",
}: {
  language: Language;
  tags?: string;
  search?: string;
}): Promise<{ posts: PostsListType }> => {
  try {
    const query =
      tags && tags !== undefined ? fetchPostListTags : fetchPostList;
    const variables =
      tags && tags !== undefined
        ? { language, tags, search }
        : { language, search };
    const result = await request<{ posts: PostsListType }>(
      gqlKey,
      query,
      variables
    );
    return result;
  } catch (error) {
    console.error("Failed to fetch post list:", error);
    throw new Error("Failed to fetch post list");
  }
};
