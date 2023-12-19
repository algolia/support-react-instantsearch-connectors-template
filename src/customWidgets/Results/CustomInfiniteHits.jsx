import React from "react";
import { useInfiniteHits } from "react-instantsearch";

export function CustomInfiniteHits(props) {
  const {
    hits,
    sendEvent,
    showPrevious,
    showMore,
    isFirstPage,
    isLastPage
  } = useInfiniteHits(props);

  return (
    <div>
      <button onClick={showPrevious} disabled={isFirstPage}>
        Show previous results
      </button>
      <ol>
        {hits.map((hit) => (
          <li
            key={hit.objectID}
            onClick={() => sendEvent("click", hit, "Hit Clicked")}
            onAuxClick={() => sendEvent("click", hit, "Hit Clicked")}
          >
            <div style={{ wordBreak: "break-all" }}>
              {JSON.stringify(hit).slice(0, 100)}…
            </div>
          </li>
        ))}
      </ol>
      <button onClick={showMore} disabled={isLastPage}>
        Show more results
      </button>
    </div>
  );
}
