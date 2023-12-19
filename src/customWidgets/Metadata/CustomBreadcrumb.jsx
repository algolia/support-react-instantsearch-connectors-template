import React from "react";
import { useBreadcrumb } from "react-instantsearch";

export function CustomBreadcrumb(props) {
  const { items, refine, createURL } = useBreadcrumb(props);

  function createOnClick(value) {
    return function onClick(event) {
      if (!isModifierClick(event)) {
        event.preventDefault();
        refine(value);
      }
    };
  }

  return (
    <ul>
      <li>
        <a href={createURL(null)} onClick={createOnClick(null)}>
          Home
        </a>
      </li>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <li key={index}>
            <span aria-hidden="true">&gt;</span>

            {isLast ? (
              item.label
            ) : (
              <a
                href={createURL(item.value)}
                onClick={createOnClick(item.value)}
              >
                {item.label}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
