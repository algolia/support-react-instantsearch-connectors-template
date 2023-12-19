import { createInsightsMiddleware } from "instantsearch.js/es/middlewares";
import { useInstantSearch } from "react-instantsearch";

export function InsightsMiddleware(props) {
  const { addMiddlewares } = useInstantSearch();

  // The Insights middleware is added in a layout effect because it mounts
  // a <Configure> widget. Widgets must be added in layout effects to minimize
  // the number of network requests.
  useLayoutEffect(() => {
    const middleware = createInsightsMiddleware(props);

    return addMiddlewares(middleware);
  }, [addMiddlewares, props]);

  return null;
}
