import React from "react";
import { useMenu } from "react-instantsearch";

export function MenuSelect(props) {
  const { items, refine } = useMenu(props);
  const { value: selectedValue } = items.find((item) => item.isRefined) || {
    value: "",
  };

  return (
    <select
      value={selectedValue}
      onChange={(event) => {
        refine(event.target.value);
      }}
    >
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label} ({item.count})
        </option>
      ))}
    </select>
  );
}
