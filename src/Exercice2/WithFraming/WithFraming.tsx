import React from "react";
import "./WithFraming.css";

interface Props {}

export const WithFraming: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="WithFraming__Framing--Red">
      <div className="WithFraming__Framing--Green">
        <div className="WithFraming__Framing--Blue">
          <div className="WithFraming__Content">{children}</div>
        </div>
      </div>
    </div>
  );
};
