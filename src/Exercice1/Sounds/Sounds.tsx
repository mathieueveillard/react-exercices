import React from "react";

export interface Sound {
  species: string;
  sound: string;
}

interface Props {
  sounds: Sound[];
}

export const Sounds: React.FunctionComponent<Props> = ({ sounds }) => {
  return (
    <ul>
      {sounds.map(({ species, sound }) => (
        <li
          key={species}
          className="standard-margin"
        >{`The ${species} goes "${sound}"!`}</li>
      ))}
    </ul>
  );
};
