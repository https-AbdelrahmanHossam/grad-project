import React from "react";

const Button = ({ type, title, variant }) => {
  return (
    <button className={`${variant} duration-200`} type={type}>
      <label className="cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
