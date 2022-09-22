import React from "react";

const Button = ({ ...rest }) => {
  return (
    <button
      className="bg-pink-600 wd-8 py-2 px-10 rounded font-semibold text-white m-3"
      {...rest}
    />
  );
};

export default Button;
