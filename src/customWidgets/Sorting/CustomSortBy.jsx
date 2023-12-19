import React from "react";
import { useSortBy } from "react-instantsearch";

export function CustomSortBy(props) {
  const { currentRefinement, options, refine } = useSortBy(props);

  return (
    <select
      onChange={(event) => refine(event.target.value)}
      value={currentRefinement}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
