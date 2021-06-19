import React from "react";
import { Status } from "./status";

export const Accepted = () => <Status status="Accepted" />;

export const Pending = () => <Status status="Pending" />;

export const Rejected = () => <Status status="Rejected" />;

export const Large = () => <Status status="Rejected" size="2rem" />;
