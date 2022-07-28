import { RequestInit } from "next/dist/server/web/spec-extension/request";

export const getApi = async (url: string) => {
  const data = await fetch(url);
  const res = await data.json();
  return res;
};
