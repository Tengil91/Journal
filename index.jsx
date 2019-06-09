import { NavBar } from './NavBar.js';
import { EntrySummaries } from './EntrySummaries.js';
import { Entry } from './Entry.js';
import { LoginForm } from './LoginForm.js';
import { Logout } from './Logout.js';
import { Users } from './Users.js';
import { NewEntry } from './NewEntry.js';
import { Registration } from './Registration.js';
let appcontainer = document.getElementById('app');

let userinfo = {
  name: 'Tengil91',
  userID: 1,
  loggedIn: true
}
let entry = {
  title: 'hello',
  content: 'u wish',
  userID: 1,
  comments: [{content: 'oggabogga', username: 'Tengil91', userID: 1},
  {content: 'lolololol', username: 'jag', userID: 2}]
}
let summaries = [
  {title: 'Hello World!', date: '2019-06-05'},
  {title: 'Bye World!', date: '2019-06-05'}
];
let mysummaries = [
  {title: 'bara min', date: '2019-06-04'},
  {title: 'yowamushi pedal', date: '2019-06-05'}
];
let userlist = [{username: 'Niklas'}, {username: "Tengil91"}, {username: "kahiun91"}];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {user: userinfo, page: 'entry'};
    this.onClickLoadHomePage = this.onClickLoadHomePage.bind(this);
    this.onClickLoadLoginPage = this.onClickLoadLoginPage.bind(this);
    this.onClickLoadLogoutPage = this.onClickLoadLogoutPage.bind(this);
    this.onClickLoadUserlistPage = this.onClickLoadUserlistPage.bind(this);
    this.onClickLoadMyEntriesPage = this.onClickLoadMyEntriesPage.bind(this);
    this.onClickLoadNewEntryPage = this.onClickLoadNewEntryPage.bind(this);
    this.onClickLoadEntryPage = this.onClickLoadEntryPage.bind(this);
  }

  //nav link listeners
  onClickLoadHomePage(e){
    console.log(e.target);
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({page: 'home'});
  }
  onClickLoadLoginPage(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({page: 'login'});
  }
  onClickLoadLogoutPage(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({page: 'logout', user: null});
  }
  onClickLoadUserlistPage(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({page: 'userlist'});
  }
  onClickLoadMyEntriesPage(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({page: 'myEntries'});
  }
  onClickLoadNewEntryPage(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({page: 'newEntry'});
  }
  onClickLoadEntryPage(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({page: 'entry'});
  }
  onClickLoadRegistrationPage(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({page: 'registration'});
  }

  render(){
    return (
      <div>
        <NavBar
          user={this.state.user}
          onClickLoadHomePage={this.onClickLoadHomePage}
          onClickLoadLoginPage={this.onClickLoadLoginPage}
          onClickLoadLogoutPage={this.onClickLoadLogoutPage}
          onClickLoadUserlistPage={this.onClickLoadUserlistPage}
          onClickLoadMyEntriesPage={this.onClickLoadMyEntriesPage}
          onClickLoadNewEntryPage={this.onClickLoadNewEntryPage}
          onClickLoadRegistrationPage={this.onClickLoadRegistrationPage}
         />
        {this.state.page === 'home' ? <EntrySummaries summaries={summaries} /> : ""} 
        {this.state.page === 'entry' ? <Entry entry={entry} user={userinfo} /> : ""} 
        {this.state.page === 'login' ? <LoginForm /> : ""} 
        {this.state.page === 'logout' ? <Logout onClick={this.onClickLoadLoginPage} /> : ""} 
        {this.state.page === 'userlist' ? <Users users={userlist} /> : ""}
        {this.state.page === 'myEntries' ? <EntrySummaries summaries={mysummaries} /> : ""}
        {this.state.page === 'newEntry' ? <NewEntry /> : ""}
        {this.state.page === 'registration' ? <Registration /> : ""}
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  appcontainer
);