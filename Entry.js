import { Comments } from './Comments.js';
import { CommentForm } from './CommentForm.js';
export class Entry extends React.Component {
  render() {
    let edit = React.createElement("button", null, "Redigera");
    return React.createElement("div", null, React.createElement("h1", null, this.props.entry.title), React.createElement("p", null, this.props.entry.content), this.props.entry.userID === this.props.user.userID ? edit : "", React.createElement(Comments, {
      comments: this.props.entry.comments,
      user: this.props.user
    }), React.createElement(CommentForm, {
      user: this.props.user
    }));
  }

}