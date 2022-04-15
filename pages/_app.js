import "../styles/globals.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </>
  )

}

export default MyApp;
