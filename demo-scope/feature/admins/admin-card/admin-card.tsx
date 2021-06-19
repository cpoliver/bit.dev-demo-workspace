import React from "react";
import { Avatar, AvatarProps } from "@cpoliver/demo-scope.ui.avatar";
import { Status, StatusProps } from "@cpoliver/demo-scope.ui.status";

export type AdminCardProps = AvatarProps & Partial<StatusProps>;

export const AdminCard: React.FC<AdminCardProps> = ({
  name,
  status,
}: AdminCardProps) => (
  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
    <div style={{ position: "relative" }}>
      <Avatar name={name} />
      <div style={{ position: "absolute", bottom: 0, right: 0 }}>
        {status && <Status status={status} size=".5rem" />}
      </div>
    </div>
    <span style={{ fontSize: "1.5rem", margin: "0 1rem" }}>{name}</span>
  </div>
);
