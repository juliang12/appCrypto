import { CryptoTable } from "@components/common";
import Skeleton from "@components/skeletons/Skeleton";
import useGetMarketsCoin from "hooks/useGetMarketsCoin";
import React, { Suspense } from "react";
import { yearsEdit } from "utils/years-edit.utils";

const NewCoins = () => {
  const { marketsCoin } = useGetMarketsCoin();

  if (!marketsCoin)
    return (
      <div className="flex justify-center items-center mt-10">
        <Skeleton />
      </div>
    );

  const years = new Date().getFullYear();

  const filteringNewCoins: any = () => {
    let filter = marketsCoin?.filter((item) =>
      yearsEdit(item.atl_date) === years.toString() ? item : null
    );
    return filter;
  };

  return (
    <table className="w-full max-w-7xl m-auto stripe shadow-2x1 ">
      <thead className="bg-blue-600 font-poppins bg-opacity-100 text-black ">
        <tr className="text-center">
          <th className="py-3">ID</th>
          <th>Image</th>
          <th className="py-3">Name</th>
          <th className="py-3">Price Current</th>
          <th className="py-3">Price change 24h</th>
        </tr>
      </thead>

      <tbody className="text-center">
        {filteringNewCoins()?.map((item, index) => (
          <CryptoTable key={index} data={item} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default NewCoins;
