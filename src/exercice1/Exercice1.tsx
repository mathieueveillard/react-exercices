import React from "react";
import Layout from "../_lib/Layout";
import YourCode from "./YourCode";

interface Props {}

export const Exercice1: React.FunctionComponent<Props> = () => {
  return (
    <Layout title="Exercice 1: composition by direct invocation">
      <YourCode />
    </Layout>
  );
};
