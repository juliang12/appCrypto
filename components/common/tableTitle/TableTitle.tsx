import React from "react";

const TableTitle = () => {
  return (
    <thead className="bg-blue-600 font-poppins bg-opacity-100 text-black ">
      <tr className="text-center">
        <th className="py-3">ID</th>
        <th>Image</th>
        <th className="py-3">Name</th>
        <th className="py-3">Price Current</th>
        <th className="py-3">Price change 24h</th>
      </tr>
    </thead>
  );
};

export default TableTitle;
