import { Comment } from './Comment.js';
export class Comments extends React.Component {
  render() {
    let comments = this.props.comments;
    return React.createElement("div", null, comments.map(comment => {
      return React.createElement(Comment, {
        user: this.props.user,
        comment: comment
      });
    }));
  }

}