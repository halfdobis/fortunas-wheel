import "../styles/globals.css";
import Layout from "../containers/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/layout.css";
import "../styles/lp.css";
import "../styles/navbar.css";
import "../styles/header.css";
import "../styles/guardian.css";
import "../styles/guardians.css";
import "../styles/rules.css";
import "../styles/acordion.css";
import "../styles/footer.css";
import "../styles/how-it-works.css";
import "../styles/about.css";
import "../styles/roadmap.css";
import "../styles/divine-draw.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <Component {...pageProps} />
    </Layout>
  );
}
