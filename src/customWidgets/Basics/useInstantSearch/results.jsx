import { useInstantSearch } from "react-instantsearch";

export function ResultsStats() {
  const { results } = useInstantSearch();

  return (
    <div>
      {results.nbHits} results found for the query “{results.query}“.
    </div>
  );
}
