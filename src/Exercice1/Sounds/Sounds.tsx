import React from "react";
import { AnimalSound } from "./Sound/Sound";
import Sound from "./Sound";

interface Props {
  sounds: AnimalSound[];
}

export const Sounds: React.FunctionComponent<Props> = ({ sounds }) => {
  return (
    <ul>
      {sounds.map((sound) => (
        <li key={sound.species} className="standard-margin">
          <Sound sound={sound} />
        </li>
      ))}
    </ul>
  );
};
