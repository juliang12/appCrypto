import Button from "@components/common/button/Button";
import CryptoTable from "@components/common/cryptotable/CryptoTable";
import SearchInput from "@components/common/searchInput/SearchInput";
import { getMarketsCoins } from "helpers/config";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { getApi } from "services/getCryptoApi";
import useSWR from "swr";

const Home: NextPage = () => {
  const { data, error } = useSWR(getMarketsCoins, getApi);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  const router = useRouter();
  const { coins } = router.query;

  const filteredData: any = () => {
    if (search.length === 0) return data?.slice(page, page + 10);

    const filtered = data.filter((item) =>
      item.id.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.slice(page, page + 10);
  };

  const nextPage = () => {
    if (data[page]) {
      setPage((current) => current + 10);
    }
  };

  const backPage = () => {
    if (page > 0) {
      setPage((current) => current - 10);
    }
  };

  if (!data) return <h1>Cargando</h1>;

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
