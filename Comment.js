export class Comment extends React.Component {
  render() {
    console.log(this.props.user.userID)
    console.log(this.props.comment.userID)
    let edit = React.createElement("button", null, "redigera");
    return React.createElement("div", null, React.createElement("p", null, this.props.comment.content), React.createElement("small", null, this.props.comment.username), this.props.comment.userID === this.props.user.userID ? edit : "");
  }

}