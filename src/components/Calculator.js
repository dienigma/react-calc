import React, { useState } from "react";
import ActionGrid from "./ActionGrid";

const CalculatorWrapper = () => {
  const [ops, setOps] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div className="px-4 max-w-md rounded shadow-md flex flex-col">
      <div className="flex flex-col">
        <div className="p-4 min-h-4">{ops}</div>
        <div className="p-4">{result}</div>
      </div>
      <ActionGrid
        setOps={setOps}
        setRes={setResult}
        result={result}
        ops={ops}
      />
    </div>
  );
};

export default CalculatorWrapper;
