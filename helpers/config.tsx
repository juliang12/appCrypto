import { getIdConfig } from "utils/getId.util";

const NAME = "coingecko";
const BASE = `api.${NAME}.com`;
export const URL = `https://${BASE}/api/v3/coins`;

export const getMarketsCoins = () => {
  const url = `${URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  return url;
};

export const getIdCoins = (id: string, currency, days = 1) => {
  const url = `${URL}/${id}/market_chart?vs_currency=${currency}&days=${days}`;
  console.log(url);
  return url;
};
