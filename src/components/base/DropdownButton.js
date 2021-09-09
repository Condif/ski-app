import React from "react";

const BaseDropdownButton = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick && onClick}
      className={`BaseDropdownButton ${className}`}
    >
      {children}
    </button>
  );
};

export default BaseDropdownButton;
