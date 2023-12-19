import React from "react";
import { useHitsPerPage } from "react-instantsearch";

export function CustomHitsPerPage(props) {
  const { items, refine } = useHitsPerPage(props);
  const { value: currentValue } =
    items.find(({ isRefined }) => isRefined) || {};

  return (
    <select
      onChange={(event) => {
        refine(Number(event.target.value));
      }}
      value={String(currentValue)}
    >
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
