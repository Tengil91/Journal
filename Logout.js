export class Logout extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement("p", null, "Du har loggat ut"), React.createElement("button", {
      onClick: this.props.onClick
    }, "Logga in"));
  }

}