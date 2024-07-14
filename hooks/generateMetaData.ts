import type { Metadata } from 'next'

export function generateMetadata({ title, description, openGraph }: Metadata) {
    return {
        title: title,
        description: description,
        openGraph: openGraph,
    }
}
