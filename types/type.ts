
// global wysiwyg types
export type WysiwygEditorType = {
    text: string;
    html: string;
};

// slider types
export type SliderListType = {
    id: string;
    image: {
        url: string;
    };
    name: string;
}[];

// section types object
export type SectionType = {
    id: string;
    description: string;
    heading: string;
    slug: string;
    images: {
        url: string;
        id: string;
    }
    wysiwygEditor: WysiwygEditorType;
};

// section content array types
export type SectionContentType = SectionType[];

// default page data types
export type DefaultPageDataType = {
    description: string;
    heading: string;
}

// hero section data array types 
export type HeroPropsType = {
    data: DefaultPageDataType[];
};


// html Target element types
export type TargetElement = {
    tag: string;
    href?: string;
    className: string;
};

// quotation section data types
export type QuotationDataType = {
    heading: string
    description: string;
    wysiwygEditor: WysiwygEditorType;
};

// about section data types
export type AboutDataType = {
    heading: string;
    description: string;
    wysiwygEditor: WysiwygEditorType;
    images: {
        id: string;
        url: string;
    };
};

// contact section data types
export type ContactDataType = {
    heading: string;
    description: string;
    wysiwygEditor: WysiwygEditorType;
}

export type NotFoundDataType = {
    heading: string;
    description: string;
    wysiwygEditor: WysiwygEditorType;
    images: {
        id: string;
        url: string;
    };
}

// image data types 
export type ImageContentDataType = {
    id: string;
    name: string;
    image: {
        url: string;
        id: string;
    };
    slug: string;
    releaseDate: string;
}

export type ImageDetailType = {
    slug: string;
    name: string;
    releaseDate: string;
    image: {
        url: string;
    }
}

// images data types 
export type ImagesDataType = ImageContentDataType[];

// post data types
export type PostContentType = {
    authors: {
        bio: string;
        name: string;
        id: string;
        picture: {
            url: string;
        }
    },
    coverImage: {
        url: string;
    },
    publishedAt: string;
    date: string;
    content: string;
}

// posts content data types
export type PostsContentType = PostContentType[];

// social data types 
export type SocialDataType = {
    id: string;
    name: string;
    url: string;
}

// Loading data types
export type LoadingType = {
    loading: boolean;
};

// navigation header data types
export type NavigationHeader = {
    href: string;
    heading: string;
};

// dynamic header data types 
export type DynamicHeaderType = {
    show?: boolean;
    onClick: () => void;
    navbar?: {
        href: string;
        heading: string;
    }[];
}

// posts list data types
export type PostsType = {
    id: string;
    content: string;
    tags: string[];
    title: string;
    slug: string;
    publishedAt: Date;
}

// images data types 
export type PostsListType = PostsType[];