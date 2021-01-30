import React from "react";

interface Props {
  text: string;
}

export const Verse: React.FunctionComponent<Props> = ({ text }) => {
  return <div>{text}</div>;
};
