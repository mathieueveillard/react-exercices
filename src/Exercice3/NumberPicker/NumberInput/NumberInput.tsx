import React from "react";

interface Props {
  onChange(n: number): void;
}

export const NumberInput: React.FunctionComponent<Props> = ({ onChange }) => {
  function onInputChange(event: React.SyntheticEvent<HTMLInputElement>): void {
    event.stopPropagation();
    const value = parseInt((event.target as HTMLInputElement).value) || 0;
    onChange(value);
  }

  return (
    <input
      className="input"
      type="number"
      placeholder="Input a number"
      onChange={onInputChange}
    />
  );
};
