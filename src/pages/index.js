import RootLayout from "../../components/Layouts/RootLayout";


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