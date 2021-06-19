import React from "react";
import { AdminCard } from "./admin-card";

export const BasicAdminCard = () => <AdminCard name="Charles Oliver" />;

export const WithStatus = () => (
  <AdminCard name="Charles Oliver" status="Accepted" />
);
