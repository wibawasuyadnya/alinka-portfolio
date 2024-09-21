"use client";
import Layout from "@/components/Layout";
import Section from "@/components/Page-components/blog/Section";

export default function Blog() {
  return (
    <Layout page="blog" withLoader={true}>
      <Section type={"list"}/>
    </Layout>
  );
}
