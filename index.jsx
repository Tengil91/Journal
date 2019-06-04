import { NavBar } from './NavBar.js';
let appcontainer = document.getElementById('app');

class App extends React.Component {
  render(){
    return (
      <NavBar loggedIn={true} user={{name: "Tengil91"}} />
    );
  }
}
ReactDOM.render(
  <App />,
  appcontainer
);