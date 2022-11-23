import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

interface CardProps {
  title: string;
}

export const KanbanCard: React.FC<CardProps> = ({ title }) => {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="body1">{title}</Typography>
      </CardContent>
    </Card>
  );
};
