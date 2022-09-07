import { getIdCoins } from "helpers/config";
import { useRouter } from "next/router";

import { getApi } from "services/getCryptoApi";
import useSWR from "swr";

const useGetCoins = () => {
  const router = useRouter();
  const coins = router.query.coins;
  const { data, error } = useSWR(getIdCoins(`${coins}`, "usd"), getApi);

  const cryptoData = data;

  return {
    cryptoData,
    error,
  };
};

export default useGetCoins;
