import { gqlKey } from "@/key/graphqlkey";
import { gql, request } from 'graphql-request';
import { SocialDataType } from "@/types/type";

/**
 * GraphQL query to fetch social
 */
const fetchSocialQuery = gql`
     query Socials {
      socials {
        id
        name
        url
      }
    }`;

/**
 * Exported function named GET to fetch social data using GraphQL
 */
export const GET = async (): Promise<{ socials: SocialDataType[] }> => {
    try {
        const result = await request<{ socials: SocialDataType[] }>(gqlKey, fetchSocialQuery);
        return result;
    } catch (error) {
        console.error('Failed to fetch social list:', error);
        throw new Error('Failed to fetch social list');
    }
};
