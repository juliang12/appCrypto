import useCrypto from "hooks/useCrypto";
import { textEdit } from "utils/text-edit.util";

const DescriptionCoin = () => {
  const { coinData } = useCrypto();

  if (!coinData) return null;

  const { name, image, market_data } = coinData;

  return (
    <div className="h-20 flex m-3 bg-slate-200 p-1">
      <div className="w-full font-semibold flex gap-3 items-center justify-center">
        <h1 className="text-xl">{name}</h1>
        <img src={image.small} alt="" />
      </div>
      <div className="flex flex-wrap justify-center item-center font-semibold">
        <h1 className="flex  font-bold text-2xl">
          {market_data.low_24h.usd} US$
        </h1>
        <h1 className="flex items-center p-1 text-orange-400 font-bold text-xl">
          {textEdit(market_data?.market_cap_change_percentage_24h)}%
        </h1>
      </div>
    </div>
  );
};

export default DescriptionCoin;
