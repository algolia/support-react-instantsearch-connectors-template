import { useInstantSearch } from "react-instantsearch";

export function IndexRenderStateRefine() {
  const { indexRenderState } = useInstantSearch();

  return (
    <button
      onClick={() => {
        indexRenderState.refinementList.brand.refine("apple");
      }}
    >
      Toggle "apple"
    </button>
  );
}
