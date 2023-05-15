import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <main className="main-container">{children}</main>
      <Footer></Footer>
    </>
  );
}
