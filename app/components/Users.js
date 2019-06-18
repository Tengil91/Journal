import React from 'react';
export class Users extends React.Component {
  render(){
    let users = this.props.users;
    return (
      <div>
        {users.map((user) => {
          return <p key={'userid'+user.userID}>{user.username}</p>
        })}
      </div>
    );
  }
}