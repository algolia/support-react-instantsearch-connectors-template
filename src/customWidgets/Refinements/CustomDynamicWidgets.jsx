import { RefinementList, useDynamicWidgets } from "react-instantsearch";

export function CustomDynamicWidgets(props) {
  const { attributesToRender } = useDynamicWidgets(props);

  return attributesToRender.map((attribute) => (
    <RefinementList key={attribute} attribute={attribute} />
  ));
}
