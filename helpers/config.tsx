const name = process.env.NEXT_PUBLIC_NAME_URL;
console.log(name);

export const getMarketsCoins = () => {
  const url = `${name}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  console.log(url);
  return url;
};

export const getIdCoins: any = (id: string, currency: string, days = 1) => {
  const url = `${name}/${id}/market_chart?vs_currency=${currency}&days=${days}`;
  return url;
};

export const getCoin = (id) => {
  const url = `${name}/${id}`;
  return url;
};
