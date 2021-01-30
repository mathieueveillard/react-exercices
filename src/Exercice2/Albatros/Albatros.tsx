import React from "react";
import "./Albatros.css";
import Verse from "./Verse";

const ALBATROS_FIRST_STANZA: string[] = [
  "Souvent, pour s’amuser, les hommes d’équipage",
  "Prennent des albatros, vastes oiseaux des mers,",
  "Qui suivent, indolents compagnons de voyage,",
  "Le navire glissant sur les gouffres amers.",
];

interface Props {}

export const Albatros: React.FunctionComponent<Props> = () => {
  return (
    <div className="Albatros__Framing--Red">
      <div className="Albatros__Framing--Green">
        <div className="Albatros__Framing--Blue">
          <div className="Albatros__Content">
            <ul className="standard-margin">
              {ALBATROS_FIRST_STANZA.map((text) => (
                <li key={text}>
                  <Verse text={text} />
                </li>
              ))}
            </ul>
            <div className="standard-margin">
              <a href="https://www.poetica.fr/poeme-127/charles-baudelaire-albatros/">
                L'albatros, Charles Baudelaire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
