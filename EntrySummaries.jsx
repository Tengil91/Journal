import { EntrySummary } from "./EntrySummary.js";

export let EntrySummaries = (props) => {
    let summaries = props.summaries;
    return (
      <div>
        {summaries.map((summary) => {
          return <EntrySummary summary={summary} />
        })}
      </div>
    );
}