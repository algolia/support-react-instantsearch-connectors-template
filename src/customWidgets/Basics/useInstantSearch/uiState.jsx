import {
  InstantSearch,
  Hits,
  SearchBox,
  useInstantSearch,
} from "react-instantsearch";

function App({ searchClient }) {
  return (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      <SearchBox />
      <NoResultsBoundary fallback={<NoResults />}>
        <Hits />
      </NoResultsBoundary>
    </InstantSearch>
  );
}

export function NoResultsBoundary({ children, fallback }) {
  const { results } = useInstantSearch();

  if (!results.__isArtificial && results.nbHits === 0) {
    return fallback;
  }

  return children;
}

export function NoResults() {
  const { setUiState } = useInstantSearch();

  return (
    <div>
      <p>No results.</p>

      <button
        onClick={() => {
          setUiState({});
        }}
      >
        Reset search
      </button>
    </div>
  );
}
