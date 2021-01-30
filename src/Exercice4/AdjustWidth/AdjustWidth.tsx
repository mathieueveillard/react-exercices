import React from "react";
import Controls from "./Controls";
import Result from "./Result";
import { minmax } from "../../util/minmax";

const MIN_SIZE = 10;

const MAX_SIZE = 50;

const DEFAULT_SIZE = 30;

const STEP = 5;

interface Props {}

export const AdjustWidth: React.FunctionComponent<Props> = () => {
  const [requestedSize, setRequestedSize] = React.useState<number>(
    DEFAULT_SIZE
  );

  const size = minmax(MIN_SIZE, MAX_SIZE)(requestedSize);

  function smaller(): void {
    setRequestedSize(size - STEP);
  }

  function reset(): void {
    setRequestedSize(DEFAULT_SIZE);
  }

  function bigger(): void {
    setRequestedSize(size + STEP);
  }

  return (
    <div>
      <div className="standard-margin">
        <Controls smaller={smaller} reset={reset} bigger={bigger} />
      </div>
      <div className="standard-margin">
        <Result width={size} />
      </div>
    </div>
  );
};
