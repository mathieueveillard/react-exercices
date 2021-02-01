import React from "react";
import { minmax } from "../../../util/minmax";

export interface ValidSizeSettings {
  min: number;
  max: number;
  defaultValue: number;
  step: number;
}

export default function useValidSize({
  min,
  max,
  defaultValue,
  step,
}: ValidSizeSettings) {
  const [requestedSize, setRequestedSize] = React.useState<number>(
    defaultValue
  );

  const size = minmax(min, max)(requestedSize);

  function smaller(): void {
    setRequestedSize(size - step);
  }

  function reset(): void {
    setRequestedSize(defaultValue);
  }

  function bigger(): void {
    setRequestedSize(size + step);
  }

  return {
    size,
    smaller,
    reset,
    bigger,
  };
}
