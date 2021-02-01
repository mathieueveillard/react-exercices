import React from "react";
import Controls from "./Controls";
import Result from "./Result";
import useValidSize from "./useValidSize";

const MIN_SIZE = 10;

const MAX_SIZE = 50;

const DEFAULT_SIZE = 30;

const STEP = 5;

interface Props {}

export const AdjustWidth: React.FunctionComponent<Props> = () => {
  const { size, smaller, reset, bigger } = useValidSize({
    min: MIN_SIZE,
    max: MAX_SIZE,
    defaultValue: DEFAULT_SIZE,
    step: STEP,
  });
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
