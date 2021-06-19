import React from "react";
import { useStatusColor } from "./use-status-color";
import { Status } from "@cpoliver/demo-scope.ui.status";

const renderExample = (status: Status, color: string) => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <div
      style={{
        height: "1rem",
        width: "1rem",
        background: color,
        margin: "0 .5rem",
      }}
    />
    <span>
      {status} ({color})
    </span>
  </div>
);

export const Accepted = () => {
  const status = "Accepted";
  const color = useStatusColor(status);

  return renderExample(status, color);
};

export const Pending = () => {
  const status = "Pending";
  const color = useStatusColor(status);

  return renderExample(status, color);
};

export const Rejected = () => {
  const status = "Rejected";
  const color = useStatusColor(status);

  return renderExample(status, color);
};
