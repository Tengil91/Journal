import React from 'react';
import { Comment } from './Comment.js';
import { style } from '../style/style.js';

export let Comments = (props) => {
    let comments = props.comments;
    return (
      <div style={style.row}>
        {
          comments.map((comment, i) => {
            return <Comment user={props.user} comment={comment} key={"comment"+i} />;
          })
        }
      </div>
    );
}