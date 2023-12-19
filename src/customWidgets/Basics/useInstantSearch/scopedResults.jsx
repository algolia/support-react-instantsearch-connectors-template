import { useInstantSearch } from "react-instantsearch";

export function ScopedResultsStats() {
  const { scopedResults } = useInstantSearch();

  const totalNbHits = scopedResults.reduce(
    (acc, { results }) => acc + results.nbHits,
    0
  );

  return <div>{totalNbHits} results found across all indices.</div>;
}
