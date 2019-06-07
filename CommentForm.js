export class CommentForm extends React.Component {
  render() {
    if (this.props.user.loggedIn) {
      return React.createElement("form", {
        action: ""
      }, React.createElement("input", {
        type: "text",
        placeholder: "kommentera inl\xE4gg"
      }), React.createElement("button", null, "Posta"));
    } else {
      return React.createElement("p", null, "logga in f\xF6r att skriva");
    }
  }

}