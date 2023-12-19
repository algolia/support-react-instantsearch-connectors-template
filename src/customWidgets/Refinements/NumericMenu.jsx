import React from "react";
import { useNumericMenu } from "react-instantsearch";

export function NumericMenu(props) {
  const { hasNoResults, items, refine } = useNumericMenu(props);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.value}>
          <label>
            <input
              type="radio"
              key={item.value}
              name={item.attribute}
              defaultChecked={item.isRefined}
              onChange={(event) => {
                event.preventDefault();

                refine(item.value);
              }}
            />
            <span>{item.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
