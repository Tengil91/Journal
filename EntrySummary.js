export let EntrySummary = props => {
  return React.createElement("a", {
    href: "#"
  }, React.createElement("div", null, React.createElement("h2", null, props.summary.title), React.createElement("p", null, props.summary.date)));
};