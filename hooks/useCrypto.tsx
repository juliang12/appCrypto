import { getCoin } from "helpers/config";
import { useRouter } from "next/router";
import { getApi } from "services/getCryptoApi";
import useSWR from "swr";

const useCrypto = () => {
  const router = useRouter();
  const coins = router.query.coins;
  const { data, error } = useSWR(getCoin(`${coins}`), getApi);

  const coinData = data;
  return {
    coinData,
    error,
  };
};

export default useCrypto;
