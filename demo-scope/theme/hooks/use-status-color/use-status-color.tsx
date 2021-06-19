import { useState } from "react";

import type { Status } from "@cpoliver/demo-scope.ui.status";

const color: { [key in Status]: string } = {
  Accepted: "cornflowerblue",
  Pending: "darkorange",
  Rejected: "tomato",
};

export const useStatusColor = (status: Status) => color[status];
