export class Users extends React.Component {
  render(){
    let users = this.props.users;
    return (
      <div>
        {users.map(user => {
          return <p>{user.username}</p>
        })}
      </div>
    );
  }
}