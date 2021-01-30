import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

export const Layout: React.FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div>
      <div className="standard-margin">
        <Link to="/">Back</Link>
      </div>
      <div className="title">{title}</div>
      <div>{children}</div>
    </div>
  );
};
