import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";
import { StateProvider } from "context/StateProvider";
import { getLibrary } from "config/web3";
import { Web3ReactProvider } from "@web3-react/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </StateProvider>
  );
}

export default MyApp;
