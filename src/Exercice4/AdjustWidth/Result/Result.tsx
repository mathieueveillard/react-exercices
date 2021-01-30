import React from "react";

interface Props {
  width: number;
}

export const Result: React.FunctionComponent<Props> = ({ width }) => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        height: "10px",
        width: `${width * 10}px`,
      }}
    />
  );
};
