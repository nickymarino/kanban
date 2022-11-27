import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import useSWR from "swr";
import { KanbanCard } from "../components/KanbanCard";
import { KanbanColumn } from "../components/KanbanColumn";
import { Board } from "./api/board";
import { useTypedQuery } from "@kanban/graphql/urql";
import { useMemo } from "react";

export default function App() {
  // const fetcher = async (slug: string): Promise<Board> =>
  // await fetch(slug).then((res) => res.json());

  // const { data, error } = useSWR("/api/board", fetcher);

  const context = useMemo(
    () => ({ additionalTypenames: ["Article", "Card"] }),
    []
  );
  const [cards] = useTypedQuery({
    query: {
      cards: {
        id: true,
        title: true,
      },
    },
    context,
  });

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Stack direction="row" spacing={2}>
          {/* {data.columns.map(column => ( */}
          <Stack direction="column" spacing={2}>
            <KanbanColumn key="column1" title="column1">
              <Stack direction="column" spacing={1}>
                {cards.map(card => (
                  <KanbanCard key={card.id} title={card.title} />
                ))}
              </Stack>
            </KanbanColumn>
          </Stack>
          {/* ))} */}
        </Stack>
      </Box>
    </Container>
  );
}
