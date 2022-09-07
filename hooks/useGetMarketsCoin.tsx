import { getMarketsCoins } from "helpers/config";
import { getApi } from "services/getCryptoApi";
import useSWR from "swr";

const useGetMarketsCoin = () => {
  const { data, error } = useSWR(getMarketsCoins, getApi);

  const marketsCoin = data;
  return {
    marketsCoin,
    error,
  };
};

export default useGetMarketsCoin;
