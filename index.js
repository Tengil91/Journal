import { NavBar } from './NavBar.js';
let appcontainer = document.getElementById('app');

class App extends React.Component {
  render() {
    return React.createElement(NavBar, {
      loggedIn: true,
      user: {
        name: "jag"
      }
    });
  }

}

ReactDOM.render(React.createElement(App, null), appcontainer);