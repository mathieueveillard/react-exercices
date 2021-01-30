import React from "react";
import Layout from "../_lib/Layout";
import AdjustWidth from "./AdjustWidth";

interface Props {}

export const Exercice4: React.FunctionComponent<Props> = () => {
  return (
    <Layout title="Exercice 4: composition using hooks">
      <AdjustWidth />
    </Layout>
  );
};
