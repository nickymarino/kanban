import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { PropsWithChildren } from "react";

interface ColumnProps {
  title: string;
}

export const KanbanColumn: React.FC<PropsWithChildren<ColumnProps>> = ({
  children,
  title,
}) => {
  return (
    <React.Fragment>
      <Typography variant="h5">{title}</Typography>
      <Stack>{children}</Stack>
    </React.Fragment>
  );
};
