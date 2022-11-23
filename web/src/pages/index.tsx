import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import useSWR from "swr";
import { KanbanCard } from "../components/KanbanCard";
import { KanbanColumn } from "../components/KanbanColumn";
import { Board } from "./api/board";

export default function App() {
  const fetcher = async (slug: string): Promise<Board> =>
    await fetch(slug).then((res) => res.json());

  const { data, error } = useSWR("/api/board", fetcher);

  if (error) return <p>Loading failed...</p>;
  if (!data) return <h1>Loading...</h1>;

  console.log({ data, error });

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
          {data.columns.map((column) => (
            <Stack direction="column" spacing={2}>
              <KanbanColumn key={column.uid} title={column.title}>
                <Stack direction="column" spacing={1}>
                  {column.cards.map((card) => (
                    <KanbanCard key={card.uid} title={card.title} />
                  ))}
                </Stack>
              </KanbanColumn>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
