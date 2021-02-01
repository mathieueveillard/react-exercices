import React from "react";

export interface AnimalSound {
  species: string;
  sound: string;
}

interface Props {
  sound: AnimalSound;
}

export const Sound: React.FunctionComponent<Props> = ({
  sound: { species, sound },
}) => {
  return <span>{`The ${species} goes "${sound}"!`}</span>;
};
