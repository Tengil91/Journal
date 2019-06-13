import { EntrySummary } from "./EntrySummary.js";
export let EntrySummaries = props => {
  let summaries = props.summaries;
  return React.createElement("div", null, summaries.map(summary => {
    return React.createElement(EntrySummary, {
      summary: summary
    });
  }));
};