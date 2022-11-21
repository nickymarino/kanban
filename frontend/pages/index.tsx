import React, {
  useEffect,
  useState,
  Component,
  ReactNode,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import useSWR, { SWRResponse, Fetcher } from "swr";
import { Board } from "./api/board";
import { Document } from "./api/scratch";

export default function App() {
  return (
    <div>
      <Content />
    </div>
  );
}

function Content() {
  const fetcher = async (slug: string): Promise<Board> =>
    await fetch(slug).then((res) => res.json());

  const { data, error } = useSWR("/api/board", fetcher);

  if (error) return <p>Loading failed...</p>;
  if (!data) return <h1>Loading...</h1>;

  console.log({ data, error });

  const column = data.columns[0];

  return (
    <div className="content">
      <Column title={column.title} />
      <ul>
        {column.cards.map((card) => (
          <Card key={card.uid} title={card.title} />
        ))}
      </ul>
    </div>
  );
}

interface ColumnProps {
  title: string;
}

const Column: React.FC<ColumnProps> = ({ title }) => {
  return (
    <div className="column">
      <h1>{title}</h1>
    </div>
  );
};

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return <li>{title}</li>;
};
