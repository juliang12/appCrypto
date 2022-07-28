import HistoryChart from "@components/common/historyChart/HistoryChart";
import { getIdCoins, URL } from "helpers/config";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getApi } from "services/getChartCrypto";
import useSWR from "swr";

const Coins = () => {
  const router = useRouter();
  const coins = router.query.coins;
  const { data, error } = useSWR(getIdCoins(`${coins}`, "usd"), getApi);

  console.log(data);
  return (
    <div>
      <HistoryChart data={data} />
    </div>
  );
};

export default Coins;
