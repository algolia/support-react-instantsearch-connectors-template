import React from "react";
import { useClearRefinements } from "react-instantsearch";

export function CustomClearRefinements(props) {
  const { canRefine, refine } = useClearRefinements(props);

  return (
    <button disabled={!canRefine} onClick={refine}>
      Clear refinements
    </button>
  );
}
