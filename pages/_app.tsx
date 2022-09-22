import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";
import { StateProvider } from "context/StateProvider";
import { getLibrary } from "config/web3";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { active, account } = useWeb3React();
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("previouslyConnected")) {
      router.push("/login");
    }
  }, [account]);
  return (
    <StateProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </Web3ReactProvider>
    </StateProvider>
  );
}

export default MyApp;
