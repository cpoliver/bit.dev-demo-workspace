import React from "react";

type Status = "Accepted" | "Pending" | "Rejected";

const icon: { [key in Status]: React.ReactNode } = {
  Accepted: <div style={{ marginTop: "-15%" }}>✔️</div>,
  Pending: <>⏳</>,
  Rejected: <>❌</>,
};

const background: { [key in Status]: React.ReactNode } = {
  Accepted: "cornflowerblue",
  Pending: "darkorange",
  Rejected: "tomato",
};

export type StatusProps = {
  status: Status;
  size?: string;
};

export const Status: React.FC<StatusProps> = ({ status, size = "1rem" }) => (
  <div
    style={{
      background: background[status],
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
