import { useTypedQuery } from "@kanban/graphql/urql";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface ColumnProps {
  title: string;
}

export const Column: React.FC<PropsWithChildren<ColumnProps>> = ({
  title,
  children,
}) => {
  const [cards] = useTypedQuery({
    query: {
      cards: {
        id: true,
        title: true,
      },
    },
  });

  return (
    <React.Fragment>
      <Typography variant="h5">{title}</Typography>
      <Stack direction="column" spacing={2}>
        {cards.fetching ? (
          <p>Loading...</p>
        ) : cards.data?.cards ? (
          cards.data?.cards.map(card => (
            <Card key={card.id} sx={{ minWidth: 275 }} variant="outlined">
              <CardContent>
                <Typography variant="body1">{card.title}</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>{cards.error.toString()}</p>
        )}
      </Stack>
      {children}
    </React.Fragment>
  );
};
