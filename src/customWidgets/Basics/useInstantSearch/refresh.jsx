import { useInstantSearch } from "react-instantsearch";

export function Refresh() {
  const { refresh } = useInstantSearch();

  return <button onClick={refresh}>Refresh</button>;
}
