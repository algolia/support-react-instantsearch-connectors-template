import algoliasearch from "algoliasearch/lite";
import React from "react";
import { InstantSearch, Configure, Highlight } from "react-instantsearch";

import { Panel, QueryRuleContext, QueryRuleCustomData } from "./components";
import { Tab, Tabs } from "./components/layout";

import {
  CustomSearchBox,
  CustomHits,
  CustomInfiniteHits,
  CustomRefinementList,
  CustomHierarchicalMenu,
  ReactSpectrumRangeSlider,
  RadixRangeSlider,
  CustomMenu,
  CustomRangeInput,
  CustomCurrentRefinements,
  MenuSelect,
  CustomToggleRefinement,
  NumericMenu,
  RatingMenu,
  CustomClearRefinements,
  CustomPagination,
  CustomHitsPerPage,
  CustomBreadcrumb,
  CustomPoweredBy,
  CustomSortBy,
} from "./customWidgets";

import {
  Error,
  IndexRenderStateRefine,
  IndexUiStateDiscounts,
  InsightsMiddleware,
  Refresh,
  RenderStateRefine,
  ResultsStats,
  ScopedResultsStats,
  Status,
  NoResultsBoundary,
  NoResults,
} from "./customWidgets/Basics/useInstantSearch";

import "./App.css";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

function Hit({ hit }) {
  return (
    <>
      <Highlight hit={hit} attribute="name" className="Hit-label" />
      <span className="Hit-price">${hit.price}</span>
    </>
  );
}

export function App() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="instant_search"
      routing={true}
      insights={true}
    >
      <Configure hitsPerPage={5} />

      <div className="Container">
        <div>
          <Panel header="Brands">
            <CustomRefinementList
              attribute="brand"
              searchable={true}
              searchablePlaceholder="Search brands"
              showMore={true}
            />
          </Panel>
          <Panel header="Categories">
            <CustomMenu attribute="categories" showMore={true} />
          </Panel>
          <Panel header="MenuSelect">
            {/* <MenuSelect attribute="categories" showMore={true} /> */}
          </Panel>

          <Panel header="Hierarchy">
            <CustomHierarchicalMenu
              attributes={[
                "hierarchicalCategories.lvl0",
                "hierarchicalCategories.lvl1",
                "hierarchicalCategories.lvl2",
              ]}
              showMore={true}
            />
          </Panel>

          <Panel header="Price">
            <CustomRangeInput attribute="price" />
          </Panel>
          <Panel header="Price Range Slider">
            <ReactSpectrumRangeSlider attribute="price" />
          </Panel>
          <Panel header="NumericMenu">
            <NumericMenu
              attribute="price"
              items={[
                { label: "All" },
                { label: "Less than 500$", end: 500 },
                { label: "Between 500$ - 1000$", start: 500, end: 1000 },
                { label: "More than 1000$", start: 1000 },
              ]}
            />
          </Panel>
          <Panel header="Free Shipping">
            <CustomToggleRefinement
              attribute="free_shipping"
              label="Free shipping"
            />
          </Panel>
        </div>
        <div className="Search">
          <CustomBreadcrumb
            attributes={[
              "hierarchicalCategories.lvl0",
              "hierarchicalCategories.lvl1",
              "hierarchicalCategories.lvl2",
            ]}
          />

          <CustomSearchBox placeholder="Search" autoFocus />

          <div className="Search-header">
            <CustomPoweredBy />
            <CustomHitsPerPage
              items={[
                { label: "20 hits per page", value: 20, default: true },
                { label: "40 hits per page", value: 40 },
              ]}
            />
            <CustomSortBy
              items={[
                { label: "Relevance", value: "instant_search" },
                { label: "Price (asc)", value: "instant_search_price_asc" },
                { label: "Price (desc)", value: "instant_search_price_desc" },
              ]}
            />
            <Refresh />
          </div>

          <div className="CurrentRefinements">
            <CustomClearRefinements />
            <CustomCurrentRefinements
              transformItems={(items) =>
                items.map((item) => {
                  const label = item.label.startsWith("hierarchicalCategories")
                    ? "Hierarchy"
                    : item.label;

                  return {
                    ...item,
                    attribute: label,
                  };
                })
              }
            />
          </div>

          <Tabs>
            <Tab title="Hits">
              <CustomHits hitComponent={Hit} />
              <CustomPagination className="Pagination" />
            </Tab>
            <Tab title="InfiniteHits">
              <CustomInfiniteHits showPrevious hitComponent={Hit} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </InstantSearch>
  );
}
