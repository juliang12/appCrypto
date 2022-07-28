import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";
import { StateProvider } from "context/StateProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
