import React from "react";

interface Props {
  smaller(): void;
  reset(): void;
  bigger(): void;
}

export const Controls: React.FunctionComponent<Props> = ({
  smaller,
  reset,
  bigger,
}) => {
  return (
    <div className="field has-addons">
      <p className="control">
        <button className="button" onClick={smaller}>
          <span className="icon is-small">
            <i className="fas fa-compress-alt"></i>
          </span>
          <span>Smaller</span>
        </button>
      </p>
      <p className="control">
        <button className="button" onClick={reset}>
          <span className="icon is-small">
            <i className="fas fa-ban"></i>
          </span>
          <span>Reset</span>
        </button>
      </p>
      <p className="control">
        <button className="button" onClick={bigger}>
          <span className="icon is-small">
            <i className="fas fa-expand-alt"></i>
          </span>
          <span>Bigger</span>
        </button>
      </p>
    </div>
  );
};
