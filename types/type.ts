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
    wysiwygEditor: WysiwygEditorType;
};

// section content array types
export type SectionContentType = SectionType[];

// hero section data types 
export type HeroDataType = {
    description: string;
    heading: string;
};

// hero section data array types 
export type HeroPropsType = {
    data: HeroDataType[];
};

// leg code atulaus

// quotation section data types

export type QuotationDataType = {
    heading: string
    description: string;
    wysiwygEditor: WysiwygEditorType;
};

// Loading data types
export type LoadingType = {
    loading: boolean;
};