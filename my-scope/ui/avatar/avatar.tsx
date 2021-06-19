import React from "react";

export type AvatarProps = {
  name: string;
};

export const Avatar: React.FC<AvatarProps> = ({ name }) => (
  <div
    style={{
      backgroundColor: "#666",
      color: "#eee",
      padding: ".5rem",
      borderRadius: "50%",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "1rem",
      width: "1rem",
    }}
  >
    <p
      style={{
        margin: "auto",
        padding: 0,
      }}
    >
      {name
        .split(" ")
        .map((n: string) => n[0] ?? "")
        .join("")}
    </p>
  </div>
);
