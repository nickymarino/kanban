import React, { PropsWithChildren } from "react";

interface ColumnProps {
  title: string;
}

export const Column: React.FC<PropsWithChildren<ColumnProps>> = ({
  children,
  title,
}) => {
  return (
    <div className="column">
      <h1>{title}</h1>
      {children}
    </div>
  );
};
