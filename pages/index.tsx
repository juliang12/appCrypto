import { Button, CryptoTable, SearchInput } from "@components/common";
import Skeleton from "@components/skeletons/Skeleton";
import useGetMarketsCoin from "hooks/useGetMarketsCoin";
import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useWeb3React } from "@web3-react/core";
import TableTitle from "@components/common/tableTitle/TableTitle";
import { useRouter } from "next/router";
import styles from "styles";

const Home: NextPage = () => {
  const { active, account } = useWeb3React();
  const router = useRouter();
  const { marketsCoin, isLoading } = useGetMarketsCoin();
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!marketsCoin) {
      <div className="flex justify-center text-center mt-10 font-poppins">
        <Skeleton />
      </div>;
    }
  }, [marketsCoin]);

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
  // useEffect(() => {
  //   if (!localStorage.getItem("previouslyConnected")) {
  //     router.push("/login");
  //   }
  // }, [account]);

  return (
    <div className={styles.container}>
      <div className="text-center">
        {active ? (
          <h1 className="font-bold text-lg">Account: {account}</h1>
        ) : null}
      </div>
      <div className="flex justify-center p-10">
        <SearchInput search={search} setSearch={setSearch} />
      </div>
      <div className="overflow-x">
        <motion.table
          key={page}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-7xl m-auto pt-1em pb-0.5  stripe shadow-2x1 hover table-auto overflow-scroll"
        >
          <TableTitle />
          <tbody className="text-center">
            {filteredData()?.map((item, index) => (
              <CryptoTable key={index} data={item} index={index} />
            ))}
          </tbody>
        </motion.table>
      </div>
      <div className="flex items-center justify-center">
        <Button onClick={nextPage}>Next</Button>
        <Button onClick={backPage}>Back</Button>
      </div>
    </div>
  );
};

export default Home;
