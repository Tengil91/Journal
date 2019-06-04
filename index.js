import { NavBar } from './NavBar.js';
import { EntrySummaries } from './EntrySummaries.js';
let appcontainer = document.getElementById('app');
let userinfo = {
  name: 'Tengil91'
};
let summaries = [{
  title: 'Hello World!',
  date: '2019-06-05'
}, {
  title: 'Bye World!',
  date: '2019-06-05'
}];

class App extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(NavBar, {
      loggedIn: true,
      user: userinfo
    }), React.createElement(EntrySummaries, {
      summaries: summaries
    }));
  }

}

ReactDOM.render(React.createElement(App, null), appcontainer);