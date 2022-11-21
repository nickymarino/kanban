import React from "react";

interface CardProps {
    title: string;
}

export const Card: React.FC<CardProps> = ({
    title,
}) => {
    return <p>Card! With title: {title}</p>
};