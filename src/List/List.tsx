import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const List: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <div className="title">React composition patterns</div>
      <div>
        <ul>
          <li className="standard-margin">
            <Link to="/exercice1">
              Exercice 1: composition by direct invocation
            </Link>
          </li>
          <li className="standard-margin">
            <Link to="/exercice2">
              Exercice 2: composition using the render props pattern (special
              "children" props)
            </Link>
          </li>
          <li className="standard-margin">
            <Link to="/exercice3">
              Exercice 3: composition using the "render props" pattern
            </Link>
          </li>
          <li className="standard-margin">
            <Link to="/exercice4">Exercice 4: composition using hooks</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
