import React from "react";

interface CardProps {
  title: string;
}

export const Card: React.FC<CardProps> = ({ title }) => {
  return <li>{title}</li>;
};
