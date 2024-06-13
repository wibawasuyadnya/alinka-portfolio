import { gqlKey } from "@/hooks/graphqlkey";
import { gql, request } from 'graphql-request';
import { SliderListType, SectionContentType, PostsContentType, ImagesDataType, SocialDataType, ImageDetailType } from "@/types/type";

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
    `
    const result = await request<{ sections: SectionContentType }>(gqlKey, query);
    return result;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch section content');
  }
}


/**
 * Get Requests for Images gallery content
 */

export const getImagesGalleryContent = async (): Promise<{ arts: ImagesDataType }> => {
  try {
    const query = gql`
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
    `
    const result = await request<{ arts: ImagesDataType }>(gqlKey, query);
    return result;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch images content');
  }
}

/**
 * Get request for image detail data
 */

export const getImageDetailContent = async ({ id }: { id: string }): Promise<{ art: ImageDetailType }> => {
  try {
    const query = gql`
      query Art($id: ID!) {
        art(where: { id: $id }) {
          slug
          name
          image {
            url
          }
        }
      }`
    const variables = { id };
    const result = await request<{ art: ImageDetailType }>(gqlKey, query, variables);
    return result;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch images detail content');
  }
}

/**
 * Get Requests for posts content
 */
export const getPostsContent = async (): Promise<{ posts: PostsContentType }> => {
  try {
    const query = gql`
    query Posts {
      posts {
        authors {
          bio
          name
          id
          picture {
            url
          }
        }
        coverImage {
          url
        }
        publishedAt
        date
        content
      }
    }
    `
    const result = await request<{ posts: PostsContentType }>(gqlKey, query);
    return result;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch section content');
  }
}

/**
 * Get Requests for social content
 */

export const getSocialMedia = async (): Promise<{ socials: SocialDataType[] }> => {
  try {
    const query = gql`
    query Socials {
      socials {
        id
        name
        url
      }
    }`
    const result = await request<{ socials: SocialDataType[] }>(gqlKey, query);
    return result;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch section content');
  }
}