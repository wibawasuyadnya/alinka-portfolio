"use client";
import Layout from "@/components/Layout";
import Section from "@/components/Page-components/blog/Section";

interface Props {
  params: {
    id: string;
  };
}

export default function BlogDetail({ params }: Props) {
  return (
    <Layout page="blog">
      <Section params={params}/>
    </Layout>
  );
}
