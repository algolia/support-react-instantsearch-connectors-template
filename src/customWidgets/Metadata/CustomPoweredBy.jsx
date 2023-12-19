import React from "react";
import { usePoweredBy } from "react-instantsearch";

export function CustomPoweredBy() {
  const { url } = usePoweredBy();

  // Download the "Search by Algolia" logo for light and dark themes.
  // https://algolia.frontify.com/d/1AZwVNcFZiu7/style-guide#/basics/algolia-logo

  return <>{/* Your JSX */}</>;
}
