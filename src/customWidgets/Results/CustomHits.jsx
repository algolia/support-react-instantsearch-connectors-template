import React from "react";
import { useHits } from "react-instantsearch";

export function CustomHits(props) {
  const { hits, sendEvent } = useHits(props);

  return (
    <ol>
      {hits.map((hit) => (
        <li
          key={hit.objectID}
          onClick={() => sendEvent("click", hit, "Hit Clicked")}
          onAuxClick={() => sendEvent("click", hit, "Hit Clicked")}
        >
          <div style={{ wordBreak: "break-all" }}>
            {JSON.stringify(hit).slice(0, 100)}
          </div>
        </li>
      ))}
    </ol>
  );
}
