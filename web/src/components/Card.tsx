import { Card as MaterialCard, CardContent, Typography } from "@mui/material";

interface CardProps {
  card: {
    id: string;
    title: string;
  };
}

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <MaterialCard key={card.id} sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="body1">{card.title}</Typography>
      </CardContent>
    </MaterialCard>
  );
};
