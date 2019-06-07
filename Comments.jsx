import { Comment } from './Comment.js';

export class Comments extends React.Component {
  render(){
    let comments = this.props.comments;
    return (
      <div>
        {
          comments.map(comment => {
            return <Comment user={this.props.user} comment={comment} />;
          })
        }
      </div>
    );
  }
}