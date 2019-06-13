import { Comment } from './Comment.js';
export let Comments = props => {
  let comments = props.comments;
  return React.createElement("div", null, comments.map(comment => {
    return React.createElement(Comment, {
      user: props.user,
      comment: comment
    });
  }));
};