import RootLayout from "@/components/layouts/RootLayout";


const Homepage = () => {

  return (
    <div>
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