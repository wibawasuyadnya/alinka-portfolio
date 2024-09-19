"use client";
import Layout from "@/components/Layout";
import ScrollProgress from "@/components/Layout-components/Scroll/ScrollProgress";
import Section from "@/components/Page-components/blog/Section/Detail/Section";

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogDetail({ params }: Props) {
  return (
    <Layout page="blog" withLoader={true}>
      <ScrollProgress count={8}/>
      <Section params={params}/>
    </Layout>
  );
}
