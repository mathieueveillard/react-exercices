import React from "react";
import { AnimalSound } from "./Sounds/Sound/Sound";
import Layout from "../_lib/Layout";
import Sounds from "./Sounds";

const sounds: AnimalSound[] = [
  { species: "cow", sound: "moo" },
  { species: "duck", sound: "quack" },
  { species: "cat", sound: "meow" },
  { species: "dog", sound: "woof" },
  { species: "human", sound: "Oh Djadja, y'a pas moyen Djadja" },
];

interface Props {}

export const Exercice1: React.FunctionComponent<Props> = () => {
  return (
    <Layout title="Exercice 1: composition by direct invocation">
      <Sounds sounds={sounds} />
    </Layout>
  );
};
