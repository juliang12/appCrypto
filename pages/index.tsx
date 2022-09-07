import { Button, CryptoTable, SearchInput } from "@components/common";
import useGetMarketsCoin from "hooks/useGetMarketsCoin";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const { marketsCoin } = useGetMarketsCoin();
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  const filteredData: any = () => {
    if (search.length === 0) return marketsCoin?.slice(page, page + 10);

    const filtered = marketsCoin.filter((item) =>
      item.id.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.slice(page, page + 10);
  };

  const nextPage = () => {
    if (marketsCoin[page]) {
      setPage((current) => current + 10);
    }
  };

  const backPage = () => {
    if (page > 0) {
      setPage((current) => current - 10);
    }
  };

  if (!marketsCoin) return <h1>Cargando</h1>;

  return (
    <div className="w-full mt-10">
      <div className="flex justify-center m-5">
        <SearchInput search={search} setSearch={setSearch} />
      </div>
      <table className="w-full max-w-7xl m-auto pt-1em pb-0.5  stripe shadow-2x1 hover">
        <thead className="bg-indigo-500 font-[Roboto] bg-opacity-100 text-white ">
          <tr className="text-center">
            <th className="py-3">ID</th>
            <th>Image</th>
            <th className="py-3">Name</th>
            <th className="py-3">Price Current</th>
            <th className="py-3">Price change 24h</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {filteredData()?.map((item, index) => (
            <CryptoTable data={item} index={index} />
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center">
        <Button onClick={nextPage}>Next</Button>
        <Button onClick={backPage}>Back</Button>
      </div>
    </div>
  );
};

export default Home;
