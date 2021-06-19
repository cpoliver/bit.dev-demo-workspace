import React from "react";
import { useStatusColor } from "@cpoliver/demo-scope.theme.hooks.use-status-color";

export type Status = "Accepted" | "Pending" | "Rejected";

const icon: { [key in Status]: React.ReactNode } = {
  Accepted: <div style={{ marginTop: "-15%" }}>✔️</div>,
  Pending: <>⏳</>,
  Rejected: <>❌</>,
};

export type StatusProps = {
  status: Status;
  size?: string;
};

export const Status: React.FC<StatusProps> = ({ status, size = "1rem" }) => {
  const background = useStatusColor(status);

  return (
    <div
      style={{
        background,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: `calc(${size} * 0.125)`,
        color: "white",
        height: `calc(${size} * 1.2)`,
        width: `calc(${size} * 1.2)`,
        fontSize: size,
      }}
    >
      <span style={{ margin: "auto" }}>{icon[status]}</span>
    </div>
  );
};
