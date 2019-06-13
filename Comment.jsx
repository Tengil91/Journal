export let Comment = (props) => {
    let edit = <button>redigera</button>;
    return (
      <div>
        <p>{props.comment.content}</p>
        <small>{props.comment.username}</small>
        {props.comment.userID === props.user.userID ? edit : ""}
      </div>
    );
}