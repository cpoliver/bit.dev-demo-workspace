import React from "react";
import { AdminCard } from "./admin-card";

export const NameOnly = () => <AdminCard name="Charles Oliver" />;

export const Accepted = () => (
  <AdminCard name="Charles Oliver" status="Accepted" />
);

export const Pending = () => (
  <AdminCard name="Daniel McEwen" status="Pending" />
);

export const Rejected = () => <AdminCard name="Adam Cosby" status="Rejected" />;
