import React from 'react';
import { style, styleCombiner } from '../style/style.js';
export let Comment = (props) => {
  let commentButtons = <div><button className="btn btn-sm btn-primary">Redigera</button><button className="btn btn-sm btn-danger">Radera</button></div>;
  return (
    <div className="col-4" style={style.comment}>
      <p>{props.comment.content}</p>
      <small>{props.comment.username}</small>
      {props.comment.userID === props.user.userID ? commentButtons : ""}
    </div>
  );
}