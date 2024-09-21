import { gqlKey } from "@/key/graphqlkey";
import { gql, request } from "graphql-request";
import { TagsListType } from "@/types/type";
import { Language } from "@/types/enum";

/**
 * GraphQL query to fetch sliders
 */
const fetchTagsQuery = gql`
  query Posts($language: Locale!) {
    posts(locales: [$language]) {
      tags
    }
  }
`;

/**
 * Exported function named GET to fetch slider data using GraphQL
 */

type Tags = {
  language: Language;
};

export const GET = async ({ language }: Tags): Promise<{ posts: TagsListType }> => {
  try {
    const variables = { language };
    const result = await request<{ posts: TagsListType }>(
      gqlKey,
      fetchTagsQuery,
      variables
    );
    return result;
  } catch (error) {
    console.error("Failed to fetch tags list:", error);
    throw new Error("Failed to fetch tags list");
  }
};
