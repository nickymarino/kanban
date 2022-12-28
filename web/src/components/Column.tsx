import { useTypedQuery } from "@kanban/graphql/urql";
import { Stack, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Card } from "./Card";
import { CreateCard } from "./CreateCard";

interface ColumnProps {
  title: string;
}

export const Column: React.FC<PropsWithChildren<ColumnProps>> = ({
  title,
  children,
}) => {
  const [result] = useTypedQuery({
    query: {
      cards: {
        id: true,
        title: true,
      },
    },
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  const cardsToRender = data.cards;

  return (
    <React.Fragment>
      <Typography variant="h5">{title}</Typography>
      <Stack direction="column" spacing={2}>
        {cardsToRender.map(card => (
          <Card key={card.id} card={card} />
        ))}
        <CreateCard />
      </Stack>
      {children}
    </React.Fragment>
  );
};
