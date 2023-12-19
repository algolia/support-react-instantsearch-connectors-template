import React from "react";
import { useMenu } from "react-instantsearch";

export function CustomMenu(props) {
  const {
    items,
    refine,
    createURL,
    canToggleShowMore,
    toggleShowMore,
    isShowingMore,
  } = useMenu(props);

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={createURL(item.value)}
              onClick={(event) => {
                event.preventDefault();

                refine(item.value);
              }}
              style={{ fontWeight: item.isRefined ? "bold" : "normal" }}
            >
              <span>{item.label}</span>
              <span>{item.count}</span>
            </a>
          </li>
        ))}
      </ul>
      {props.showMore && (
        <button disabled={!canToggleShowMore} onClick={toggleShowMore}>
          {isShowingMore ? "Show less" : "Show more"}
        </button>
      )}
    </>
  );
}
