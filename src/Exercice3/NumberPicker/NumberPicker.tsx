import React from "react";
import NumberInput from "./NumberInput";
import Number from "../Number";

interface Props {}

export const NumberPicker: React.FunctionComponent<Props> = () => {
  const [index, setIndex] = React.useState<number>(0);

  return (
    <div>
      <div className="standard-margin">
        <NumberInput onChange={setIndex} />
      </div>
      <div className="standard-margin">
        Your input: <Number index={index} />
      </div>
    </div>
  );
};
