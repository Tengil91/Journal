import React from 'react';
import { Comments } from './Comments.js';
import { CommentForm } from './CommentForm.js';

export let Entry = (props) => {
    let entryButtons = <div><button className="btn btn-primary">Redigera</button><button className="btn btn-danger">Radera</button></div>;
    return (
      <div className="row">
      <div className="col-12" style={{background: "#ddd"}}>
        <h1>{props.entry.title}</h1>
        <p>{props.entry.content}</p>
        {props.entry.userID === props.user.userID ? entryButtons : ""}
        <Comments comments={props.entry.comments} user={props.user} />
        <CommentForm user={props.user} />
      </div>
      </div>
    );
}