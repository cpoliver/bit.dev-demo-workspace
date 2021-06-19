import React from "react";

export type AvatarProps = {
  name: string;
  size?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ name, size = "1.5rem" }) => (
  <div
    style={{
      backgroundColor: "tomato",
      color: "#eee",
      padding: ".5rem",
      borderRadius: "50%",
      height: size,
      width: size,
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <span style={{ fontSize: `calc(${size} * 0.8)`, margin: 0, padding: 0 }}>
      {name
        .split(" ")
        .map((n: string) => n[0] ?? "")
        .join("")}
    </span>
  </div>
);
