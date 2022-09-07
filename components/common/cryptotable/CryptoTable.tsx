import Link from "next/link";

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
    <tr key={id} className="bg-indigo-50 shadow p-4 m-1 font-semibold">
      <td>{index}</td>
      <td className="flex justify-center">
        <img className="w-8" src={image} alt="" />
      </td>
      <td>
        <div>
          <Link href={`/coins/${id}`}>{name}</Link>
        </div>
      </td>
      <td>{current_price}</td>
      <td>
        <h1 className={`${changeColor()}`}>{price_change_24h}</h1>
      </td>
    </tr>
  );
};

export default CryptoTable;
