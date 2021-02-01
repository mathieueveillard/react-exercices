import React from "react";

interface Props {
  n: number;
}

export const Number: React.FunctionComponent<Props> = ({ n }) => {
  return <span>{n}</span>;
};
