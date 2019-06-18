import React from 'react';
import { EntrySummary } from "./EntrySummary.js";

export let EntrySummaries = (props) => {
    let summaries = props.summaries;
    return (
      <div>
        {summaries.map((summary, i) => {
          return <EntrySummary summary={summary} key={'summary'+i} />
        })}
      </div>
    );
}