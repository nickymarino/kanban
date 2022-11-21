import React, { useEffect, useState } from "react";
import useSWR, { SWRResponse, Fetcher } from "swr";
import { Document } from "./api/scratch";

export default function App() {
  return <Content />;
}

function Content() {
  const fetcher = async (slug: string): Promise<Document> =>
    await fetch(slug).then((res) => res.json());

  const { data, error } = useSWR("/api/scratch", fetcher);

  if (error) return <p>Loading failed...</p>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <ul>
      {data.cards.map((card) => (
        <Card key={card.id} title={card.title} />
      ))}
    </ul>
  );
}

interface CardProps {
  title: string;
}

export const Card: React.FC<CardProps> = ({ title }) => {
  return <li>{title}</li>;
};
