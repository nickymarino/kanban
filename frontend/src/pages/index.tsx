import React from "react";
import useSWR from "swr";
import { Column } from "../components/Column";
import { Card } from "../components/Card";
import { Board } from "./api/board";
import StyledEmotionButton from "../components/StyledEmotionButton";

export default function App() {
  return <Content />;
}

function Content() {
  const fetcher = async (slug: string): Promise<Board> =>
    await fetch(slug).then((res) => res.json());

  const { data, error } = useSWR("/api/board", fetcher);

  if (error) return <p>Loading failed...</p>;
  if (!data) return <h1>Loading...</h1>;

  console.log({ data, error });

  return (
    <div className="content">
      {data.columns.map((column) => (
        <Column key={column.uid} title={column.title}>
          <StyledEmotionButton />
          <ul>
            {column.cards.map((card) => (
              <Card key={card.uid} title={card.title} />
            ))}
          </ul>
        </Column>
      ))}
    </div>
  );
}
