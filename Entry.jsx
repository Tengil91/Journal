import { Comments } from './Comments.js';
import { CommentForm } from './CommentForm.js';

export class Entry extends React.Component {
  render(){
    let edit = <button>Redigera</button>;
    return (
      <div>
        <h1>{this.props.entry.title}</h1>
        <p>{this.props.entry.content}</p>
        {this.props.entry.userID === this.props.user.userID ? edit : ""}
        <Comments comments={this.props.entry.comments} user={this.props.user} />
        <CommentForm user={this.props.user} />
      </div>
    );
  }
}