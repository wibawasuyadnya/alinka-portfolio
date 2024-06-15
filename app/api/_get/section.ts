import { gqlKey } from "@/key/graphqlkey";
import { gql, request } from 'graphql-request';
import { SectionContentType } from "@/types/type";

/**
 * GraphQL query to fetch sections
 */
const fetchSectionQuery = gql`
    query Sections {
      sections {
        id
        description
        heading
        slug
        images {
          id
          url
        }
        wysiwygEditor {
          text
          html
        }
      }
    }
`;

/**
 * Exported function named GET to fetch sections data using GraphQL
 */
export const GET = async (): Promise<{ sections: SectionContentType }> => {
    try {
        const result = await request<{ sections: SectionContentType }>(gqlKey, fetchSectionQuery);
        return result;
    } catch (error) {
        console.error('Failed to fetch sections list:', error);
        throw new Error('Failed to fetch sections list');
    }
};
