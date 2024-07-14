import Layout from "@/components/Layout";
import Section from "@/components/Page-components/home/section/Section";
import { generateMetadata } from "@/hooks/generateMetaData";
import { Fragment } from "react";

export default function Home() {

  const metadata = generateMetadata({
    title: "memek",
    description: "description",
  });

  return (
    <Fragment>
      <Layout withLoader={true} page="home" metadata={metadata}>
        <Section />
      </Layout>
    </Fragment>
  );
}
