export let Comment = props => {
  let edit = React.createElement("button", null, "redigera");
  return React.createElement("div", null, React.createElement("p", null, props.comment.content), React.createElement("small", null, props.comment.username), props.comment.userID === props.user.userID ? edit : "");
};