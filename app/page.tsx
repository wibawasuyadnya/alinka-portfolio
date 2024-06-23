import Layout from "@/components/Layout";
import Section from "@/components/Page-components/home/section/Section";
import { Fragment } from "react";

const env = process.env.NEXT_PUBLIC_ENVIRONMENT;

export default function Home() {
  return (
    <Fragment>
      <Layout withLoader={true} page="home">
        <Section />
        {env}
      </Layout>
    </Fragment>
  );
}
