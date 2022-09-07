import { getCoin, getMarketsCoins } from "helpers/config";
import { useRouter } from "next/router";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { getApi } from "services/getCryptoApi";
import useSWR from "swr";

type Props = {
  children?: ReactNode;
};

export const StateContext = createContext(null);

const StateProvider = ({ children }: Props) => {
  const router = useRouter();
  const coins = router.query.coins;
  const { data, error } = useSWR(getCoin(`${coins}`), getApi);

  const contextValues = useMemo(() => ({ data, error }), [data]);
  return (
    <StateContext.Provider value={contextValues}>
      {children}
    </StateContext.Provider>
  );
};

export const useCrypto = () => {
  const context = useContext(StateContext);
  return context;
};
export { StateProvider };
