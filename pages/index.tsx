import Layout from "./components/Layout/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>StartUpMaxim</title>
        <meta
          name="description"
          content="Grow your bussiness by using our Consultants guidence, OR Using Our team makes projects for your Bussiness."
        />
        <meta name="keywords" content="Growing Bussiness" />
        <meta name="keywords" content="Bussiness Projects Builders" />
      </Head>
      <Layout>
        <h1 className="text-2xl font-bold text-red-500">Homepage</h1>
      </Layout>
    </>
  );
}
