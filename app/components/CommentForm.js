import React from 'react';
export let CommentForm = (props) => {
  if(props.user.loggedIn){
    return (
      <form action="" style={{marginBottom: 5, marginTop: 5}}>
        <textarea className="form-control" placeholder="kommentera inlägg"></textarea>
      </form>
    );
  } else {
    return <p>logga in för att skriva</p>;
  }
}