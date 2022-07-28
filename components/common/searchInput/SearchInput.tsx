import React from "react";

const SearchInput = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className="py-2 px-10 border-2 rounded border-solid border-slate-500"
      type="text"
      value={search}
      placeholder="Search...."
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
