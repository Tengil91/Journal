export class EntrySummary extends React.Component {
  render() {
    console.log(this.props)
    return React.createElement("a", {
      href: "#"
    }, React.createElement("div", null, React.createElement("h2", null, this.props.summary.title), React.createElement("p", null, this.props.summary.date)));
  }

}