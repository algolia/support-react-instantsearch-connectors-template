import { useInstantSearch } from "react-instantsearch";

export function RenderStateRefine() {
  const { renderState } = useInstantSearch();

  return (
    <button
      onClick={() => {
        renderState.instant_search.refinementList.brand.refine("apple");
      }}
    >
      Toggle "apple"
    </button>
  );
}
