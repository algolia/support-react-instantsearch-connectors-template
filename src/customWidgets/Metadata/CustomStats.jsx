import React from "react";
import { useStats } from "react-instantsearch";

export function CustomStats() {
  const { nbHits, processingTimeMS, query } = useStats();

  return (
    <span>
      {nbHits.toLocaleString()} results found in{" "}
      {processingTimeMS.toLocaleString()}ms for <q>{query}</q>.
    </span>
  );
}
