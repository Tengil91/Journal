import { NavBar } from './NavBar.js';
import { EntrySummaries } from './EntrySummaries.js';
import { Entry } from './Entry.js';
import { LoginForm } from './LoginForm.js';
let appcontainer = document.getElementById('app');
let userinfo = {
  name: 'Tengil91',
  userID: 1,
  loggedIn: true
};
let entry = {
  title: 'hello',
  content: 'u wish',
  userID: 1,
  comments: [{
    content: 'oggabogga',
    username: 'Tengil91',
    userID: 1
  }, {
    content: 'lolololol',
    username: 'jag',
    userID: 2
  }]
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
    }), React.createElement(Entry, {
      entry: entry,
      user: userinfo
    }), React.createElement(LoginForm, null));
  }

}

ReactDOM.render(React.createElement(App, null), appcontainer);