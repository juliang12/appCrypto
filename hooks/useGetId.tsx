import { getIdCoins } from "helpers/config";
import React, { useEffect, useState } from "react";
import { getApi } from "services/getCryptoApi";
import useSWR from "swr";

const useGetId = () => {
  const { data, error } = useSWR(getIdCoins, getApi);

  const getDataCoins = async (id: string): Promise<any> => {
    let newId = id?.toString();
    const res = await getApi(getIdCoins(newId));
    return res;
  };

  return {
    data,
    getDataCoins,
  };
};

export default useGetId;
