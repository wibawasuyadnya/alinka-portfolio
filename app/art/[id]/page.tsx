import Layout from "@/components/Layout";
import Section from "@/components/Page-components/art/Section";

interface Props {
  params: {
    id: string;
  };
}

export default async function ArtDetail({ params }: Props) {
  return (
    <Layout page="art">
      <Section params={params} />
    </Layout>
  );
}
