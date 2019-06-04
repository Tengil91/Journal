export class Entry extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.entry.title}</h1>
        <p>{this.props.entry.title}</p>
        <Comments comments={this.props.entry.comments} user={this.props.user} />
        <CommentForm loggedIn={this.props.user.loggedIn} />
      </div>
    );
  }
}