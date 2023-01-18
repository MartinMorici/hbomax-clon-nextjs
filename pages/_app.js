import Header from '@/components/Header';
import '@/styles/globals.css';
Header;
export default function App({ Component, pageProps }) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}
