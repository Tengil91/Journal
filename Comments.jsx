import { Comment } from './Comment.js';

export let Comments = (props) => {
    let comments = props.comments;
    return (
      <div>
        {
          comments.map(comment => {
            return <Comment user={props.user} comment={comment} />;
          })
        }
      </div>
    );
}