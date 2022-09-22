import { getMarketsCoins } from "helpers/config";
import { getApi } from "services/getCryptoApi";
import useSWR from "swr";

const url = getMarketsCoins();

const useGetMarketsCoin = () => {
  const { data: marketsCoin, isValidating, error } = useSWR(url, getApi);

  const isLoading = !marketsCoin && isValidating;

  return {
    marketsCoin,
    isLoading,
    error,
  };
};

export default useGetMarketsCoin;
