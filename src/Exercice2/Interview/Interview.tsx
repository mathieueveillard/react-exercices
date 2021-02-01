import React from "react";

interface Props {}

export const Interview: React.FunctionComponent<Props> = () => {
  return (
    <iframe
      title="François Rollin : L'interview la plus constructive du monde"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/u28FU1Y-CGQ"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
