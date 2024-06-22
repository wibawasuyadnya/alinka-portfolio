import Layout from "@/components/Layout";
import Section from "@/components/Page-components/home/section/Section";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Fragment } from "react";
import Error from "./global-error";

export default function Home() {
  return (
    <Fragment>
      <Layout withLoader={true} page="home">
          <Section />
      </Layout>
    </Fragment>
  );
}
