import React from "react";

interface Props {
  index: number;
}

export const Number: React.FunctionComponent<Props> = ({ index }) => {
  return <span>{index}</span>;
};
