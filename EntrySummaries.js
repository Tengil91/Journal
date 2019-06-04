import { EntrySummary } from "./EntrySummary.js";
export class EntrySummaries extends React.Component {
  render() {
    let summaries = this.props.summaries;
    return React.createElement("div", null, summaries.map(summary => {
      return React.createElement(EntrySummary, {
        summary: summary
      });
    }));
  }

}