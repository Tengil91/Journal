export class Logout extends React.Component {
  render(){
    return (
      <div>
        <p>Du har loggat ut</p>
        <button onClick={this.props.onClick}>Logga in</button>
      </div>
    );
  }
}