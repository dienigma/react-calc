import React from "react";

const CalcBtn = ({ content, onClick, className, disabled }) => {
  const hoverClassName = isNaN(content)
    ? "hover:bg-amber-200"
    : "hover:bg-neutral-200";
  return (
    <button
      className={`text-center p-4 border ${className} ${hoverClassName} rounded`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default CalcBtn;
