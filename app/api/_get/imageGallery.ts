import { gqlKey } from "@/key/graphqlkey";
import { gql, request } from 'graphql-request';
import { ImagesDataType } from "@/types/type";

/**
 * GraphQL query to fetch image gallery 
 */
const fetchImageGalleryQuery = gql`
    query Arts {
      arts {
        id
        name
        image {
          url
          id
        }
        slug
        releaseDate
      }
    }    
`;

/**
 * Exported function named GET to fetch image gallery data using GraphQL
 */
export const GET = async (): Promise<{ arts: ImagesDataType }> => {
    try {
        const result = await request<{ arts: ImagesDataType }>(gqlKey, fetchImageGalleryQuery);
        return result;
    } catch (error) {
        console.error('Failed to fetch image gallery list:', error);
        throw new Error('Failed to fetch image gallery list');
    }
};
