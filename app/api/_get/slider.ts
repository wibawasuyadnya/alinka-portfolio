import { gqlKey } from "@/key/graphqlkey";
import { gql, request } from 'graphql-request';
import { SliderListType } from "@/types/type";

/**
 * GraphQL query to fetch sliders
 */
const fetchSlidersQuery = gql`
  query Sliders {
    sliders {
      id
      image {
        url
      }
      name
    }
  }
`;

/**
 * Exported function named GET to fetch slider data using GraphQL
 */
export const GET = async (): Promise<{ sliders: SliderListType }> => {
    try {
        const result = await request<{ sliders: SliderListType }>(gqlKey, fetchSlidersQuery);
        return result;
    } catch (error) {
        console.error('Failed to fetch slider list:', error);
        throw new Error('Failed to fetch slider list');
    }
};
