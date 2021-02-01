import React from "react";
import NumberInput from "./NumberInput";

interface Props {
  renderNumber(n: number): React.ReactElement;
}

export const NumberPicker: React.FunctionComponent<Props> = ({
  renderNumber,
}) => {
  const [value, setValue] = React.useState<number>(0);

  return (
    <div>
      <div className="standard-margin">
        <NumberInput onChange={setValue} />
      </div>
      <div className="standard-margin">Your input: {renderNumber(value)}</div>
    </div>
  );
};
