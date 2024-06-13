import Layout from "@/components/Layout";
import Section from "@/components/Page-components/home/section/Section";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Layout withLoader={true}>
        <Section />
      </Layout>
    </Fragment>
  );
}
