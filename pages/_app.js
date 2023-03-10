import '../styles/globals.css';
import Layout from '../containers/Layout';
import '../styles/layout.css';
import '../styles/navbar.css';
import '../styles/header.css';
import '../styles/guardian.css';
import '../styles/guardians.css';
import '../styles/howtoplay.css';
import '../styles/rules.css';
import '../styles/faq.css';
import '../styles/acordion.css';
import '../styles/footer.css';
import '../styles/story.css';
import '../styles/how-it-works.css';
import '../styles/about.css';
import '../styles/divine-draw.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}