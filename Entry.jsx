import { Comments } from './Comments.js';
import { CommentForm } from './CommentForm.js';

export let Entry = (props) => {
    let edit = <button>Redigera</button>;
    return (
      <div>
        <h1>{props.entry.title}</h1>
        <p>{props.entry.content}</p>
        {props.entry.userID === props.user.userID ? edit : ""}
        <Comments comments={props.entry.comments} user={props.user} />
        <CommentForm user={props.user} />
      </div>
    );
}