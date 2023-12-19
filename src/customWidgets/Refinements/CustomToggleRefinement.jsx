import React from "react";
import { useToggleRefinement } from "react-instantsearch";

export function CustomToggleRefinement(props) {
  const { value, refine } = useToggleRefinement(props);

  return (
    <label>
      <input
        type="checkbox"
        checked={value.isRefined}
        onChange={(event) => {
          refine({ isRefined: !event.target.checked });
        }}
      />

      <span>{props.attribute}</span>
    </label>
  );
}
