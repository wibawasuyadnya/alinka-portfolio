import { gqlKey } from "@/key/graphqlkey";
import { gql, request } from "graphql-request";
import { PostType } from "@/types/type";
import { Language } from "@/types/enum";

/**
 * GraphQL query to fetch image detail
 */
const fetchPostDetail = gql`
  query Post($id: ID!, $language: Locale!) {
    post(locales: [$language], where: { id: $id }) {
      id
      coverImage {
        url
      }
      createdBy {
        name
        picture
        isActive
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

type PostDetail = {
  language: Language;
  id: string;
};

export const GET = async ({
  language,
  id,
}: PostDetail): Promise<{ post: PostType }> => {
  try {
    const variables = { language, id };
    const result = await request<{ post: PostType }>(
      gqlKey,
      fetchPostDetail,
      variables
    );
    return result;
  } catch (error) {
    console.error("Failed to fetch post list:", error);
    throw new Error("Failed to fetch post list");
  }
};
