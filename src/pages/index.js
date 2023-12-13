import RootLayout from "@/components/layouts/RootLayout";
import Head from "next/head";


const Homepage = () => {

  return (
    <div>
      <Head>
        <title>Next Home Page </title>
        <meta name="home page" description="this page is created by next js" />
      </Head>
      <h1>This is a Next.JS Home Page</h1>
    </div>
  )
};
export default Homepage;

Homepage.getLayout = function getLayout(page) { // Page = HomePage
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}