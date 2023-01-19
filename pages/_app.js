import Header from '@/components/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/globals.css';
Header;
export default function App({ Component, pageProps, children }) {
  return <Component {...pageProps} />;
}
