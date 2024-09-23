import { Metadata } from "next";
import { Suspense } from 'react'
import Layout from "@/components/Layout";
import Section from "@/components/Page-components/blog/Section";

export const metadata: Metadata = {
  title: {
    default: "My Blog",
    template: "%s - My Blog",
  },
  description: "Come and read my awesome articles",
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "./", 
  },
};

export default function Blog() {
  return (
    <Layout page="blog">
      <Suspense>
        <Section type={"list"} />
      </Suspense>
    </Layout>
  );
}
