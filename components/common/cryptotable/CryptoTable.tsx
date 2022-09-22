import Link from "next/link";
import { motion } from "framer-motion";

const CryptoTable = ({ data, index }) => {
  const { id, image, name, current_price, price_change_24h } = data;

  let priceChange = price_change_24h.toString().includes("-");

  const changeColor = () => {
    if (priceChange) {
      return "red";
    } else {
      return "green";
    }
  };

  return (
    <motion.tr
      layoutId={index}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      key={id}
      className="bg-zinc-800 shadow p-6 m-2 font-semibold"
    >
      <td>{index}</td>
      <td className="flex justify-center">
        <img className="w-8 p-1" src={image} alt="" />
      </td>
      <td>
        <div>
          <Link href={`/coins/${id}`}>{name}</Link>
        </div>
      </td>
      <td>${current_price}</td>
      <td>
        <h1 className={`${changeColor()}`}>{price_change_24h}</h1>
      </td>
    </motion.tr>
  );
};

export default CryptoTable;
