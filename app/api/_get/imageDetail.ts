import { gqlKey } from "@/key/graphqlkey";
import { gql, request } from 'graphql-request';
import { ImageDetailType } from "@/types/type";

/**
 * GraphQL query to fetch image detail 
 */
const fetchImageDetailQuery = gql`
 query Art($id: ID!) {
        art(where: { id: $id }) {
          slug
          name
          image {
            url
          }
        }
      }
`;

/**
 * Exported function named GET to fetch image detail data using GraphQL
 */
export const GET = async ({ id }: { id: string }): Promise<{ art: ImageDetailType }> => {
    try {
        const variables = { id };
        const result = await request<{ art: ImageDetailType }>(gqlKey, fetchImageDetailQuery, variables);
        return result;
    } catch (error) {
        console.error('Failed to fetch image gallery list:', error);
        throw new Error('Failed to fetch image gallery list');
    }
};
