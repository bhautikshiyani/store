import Layout from '@/components/TopHeader/Layout'
import '@/styles/globals.css'
import 'react-slideshow-image/dist/styles.css';
export default function App({ Component, pageProps }) {
  return(

  <>
  <Layout>

  <Component {...pageProps} />
  </Layout>
  
  </>
  ) 
}
