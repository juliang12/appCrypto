import Link from "next/link";
import React from "react";

const CryptoTable = ({ data, index }) => {
  const { id, image, name, current_price, price_change_24h } = data;

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
      <td>{price_change_24h}</td>
    </tr>
  );
};

export default CryptoTable;
