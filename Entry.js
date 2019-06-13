import { Comments } from './Comments.js';
import { CommentForm } from './CommentForm.js';
export let Entry = props => {
  let edit = React.createElement("button", null, "Redigera");
  return React.createElement("div", null, React.createElement("h1", null, props.entry.title), React.createElement("p", null, props.entry.content), props.entry.userID === props.user.userID ? edit : "", React.createElement(Comments, {
    comments: props.entry.comments,
    user: props.user
  }), React.createElement(CommentForm, {
    user: props.user
  }));
};