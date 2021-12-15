import React from "react";
import { btnConfig } from "../btnConfig";
import CalcBtn from "./CalcBtn";

const ActionGrid = ({ setOps, setRes, ops, res }) => {
  const disable = ops.length && (isNaN(ops[ops.length - 1]) || isNaN(ops[0]));
  const clearCalc = () => {
    setRes(0);
    setOps("");
  };

  const calcRes = () => {
    const res = eval(ops);
    setRes(res);
  };
  const handleBtnClick = (content) => {
    if (content === "C") return clearCalc();
    if (content === "=") return calcRes();
    setOps(isNaN(content) ? `${ops}${content}` : `${ops}${content}`);
  };

  return (
    <div className="grid grid-cols-4 py-4 gap-1 cursor-pointer">
      {btnConfig.map((item, index) => {
        return (
          <CalcBtn
            content={item.content}
            onClick={() =>
              handleBtnClick(item.content === "x" ? "*" : item.content)
            }
            className={`${item.className} disabled:cursor-not-allowed`}
            key={index}
            disabled={disable && isNaN(item.content) && item.content !== "C"}
          />
        );
      })}
    </div>
  );
};

export default ActionGrid;
