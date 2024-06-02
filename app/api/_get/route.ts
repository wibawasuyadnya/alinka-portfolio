import { gqlKey } from "@/hooks/graphqlkey";
import { gql, request } from 'graphql-request';

/**
 * Get Requests for slider
 */

export const getSliderRequest = async () => {
    try {
        const query = gql`
        query Sliders {
            sliders {
              id
              image {
                url
              }
              name
            }
          }
        `
        const result = await request(gqlKey, query);
        return result;
    } catch (err) {
        console.error(err);
    }
}
