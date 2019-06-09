export class Users extends React.Component {
  render() {
    let users = this.props.users;
    return React.createElement("div", null, users.map(user => {
      return React.createElement("p", null, user.username);
    }));
  }

}