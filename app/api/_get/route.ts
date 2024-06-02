import { gqlKey } from "@/hooks/graphqlkey";
import { gql, request } from 'graphql-request';
import { SliderListType, SectionContentType } from "@/types/type";

/**
 * Get Requests for slider
 */

export const getSliderRequest = async (): Promise<{ sliders: SliderListType }> => {
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
    const result = await request<{ sliders: SliderListType }>(gqlKey, query);
    return result;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch slider list');
  }
}

/**
 * Get Requests for section content
 */

export const getSectionContent = async (): Promise<{ sections: SectionContentType }> => {

  try {
    const query = gql`
    query Sections {
      sections {
        id
        description
        heading
        slug
        wysiwygEditor {
          text
          html
        }
      }
    }
    `
    const result = await request<{ sections: SectionContentType }>(gqlKey, query);
    return result;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch section content');
  }
}

