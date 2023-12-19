import {
  InstantSearch,
  RefinementList,
  useInstantSearch,
} from "react-instantsearch";

export function IndexUiStateDiscounts() {
  const { indexUiState, setIndexUiState } = useInstantSearch();
  const disabled = indexUiState.refinementList?.discounts?.includes("-50% off");

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => {
        setIndexUiState((prevIndexUiState) => ({
          ...prevIndexUiState,
          refinementList: {
            ...prevIndexUiState.refinementList,
            discounts: ["-50% off", "free shipping"],
          },
        }));
      }}
    >
      Show discounts
    </button>
  );
}

function App({ searchClient }) {
  return (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      <Discounts />
      <RefinementList attribute="discounts" />
    </InstantSearch>
  );
}
