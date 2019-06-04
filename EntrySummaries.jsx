import { EntrySummary } from "./EntrySummary.js";

export class EntrySummaries extends React.Component {
  render(){
    let summaries = this.props.summaries;
    return (
      <div>
        {summaries.map((summary) => {
          return <EntrySummary summary={summary} />
        })}
      </div>
    );
  }
}