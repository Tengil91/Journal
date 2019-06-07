export class Comment extends React.Component {
  render(){
    let edit = <button>redigera</button>;
    return (
      <div>
        <p>{this.props.comment.content}</p>
        <small>{this.props.comment.username}</small>
        {this.props.comment.userID === this.props.user.userID ? edit : ""}
      </div>
    );
  }
}