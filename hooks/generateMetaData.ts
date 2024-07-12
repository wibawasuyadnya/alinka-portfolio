import type { Metadata } from 'next'

type Props = {
    title: string;
    description: string;
    images: string;
}

export async function generateMetadata({ title, description, images }: Props): Promise<Metadata> {
    return {
        title: title,
        description: description,
        openGraph: {
            images: [
                {
                    url: images,
                },
            ],
        },
    }
}
