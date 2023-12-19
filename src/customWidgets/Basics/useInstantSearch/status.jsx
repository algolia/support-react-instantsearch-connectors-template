import { useInstantSearch } from "react-instantsearch";

export function Status() {
  const { status } = useInstantSearch();

  if (status === "loading" || status === "stalled") {
    return <>Loading...</>;
  }
}
