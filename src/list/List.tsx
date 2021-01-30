import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const List: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <ul>
        <li className="standard-margin">
          <Link to="/exercice1">
            Exercice 1: composition by direct invocation
          </Link>
        </li>
      </ul>
    </div>
  );
};
