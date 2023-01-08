import '../styles/globals.css'
import '../styles/navbar.css';

import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
