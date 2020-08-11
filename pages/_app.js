import '../styles/global.scss'
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
  return <ParallaxProvider><Component {...pageProps} /></ParallaxProvider>
}