import React from "react";
import Layout from "../_lib/Layout";
import Bart from "./Bart";
import Albatros from "./Albatros";
import Interview from "./Interview";

interface Props {}

export const Exercice2: React.FunctionComponent<Props> = () => {
  return (
    <Layout title='Exercice 2: composition using the render props pattern (special "children" props)'>
      <ul>
        <li className="standard-margin">
          <Bart />
        </li>
        <li className="standard-margin">
          <Albatros />
        </li>
        <li className="standard-margin">
          <Interview />
        </li>
      </ul>
    </Layout>
  );
};
