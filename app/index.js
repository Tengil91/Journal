import React from 'react';
import ReactDOM from 'react-dom';

import { NavBar } from './components/NavBar.js';
import { EntrySummaries } from './components/EntrySummaries.js';
import { Entry } from './components/Entry.js';
import { LoginForm } from './components/LoginForm.js';
import { Logout } from './components/Logout.js';
import { Users } from './components/Users.js';
import { NewEntry } from './components/NewEntry.js';
import { Registration } from './components/Registration.js';
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
  comments: [
    {content: 'oggabogga', username: 'Tengil91', userID: 1},
    {content: 'lolololol', username: 'jag', userID: 2},
    {content: 'lolololol', username: 'jag', userID: 2},
    {content: 'lolololol', username: 'jag', userID: 2},
    {content: 'lolololol', username: 'jag', userID: 2},
    {content: 'lolololol', username: 'jag', userID: 2},
    {content: 'lolololol', username: 'jag', userID: 2},
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
let userlist = [{username: 'Niklas', userID: 3}, {username: "Tengil91", userID: 1}, {username: "kahiun91", userID: 4}];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {user: userinfo, page: 'entry'};
    this.onNavLinkClick = this.onNavLinkClick.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  onNavLinkClick(page){
    if(page === 'logout'){
      this.setState({page: 'logout', user: null});
    }
    this.setState({page: page});
  }

  login(username, password){
    console.log("Du tryckte på logga in knappen :o");
    console.log(username);
    console.log(password);
  }
  
  register(username, password){
    console.log("Du tryckte på logga in knappen :o");
    console.log(username);
    console.log(password);
  }

  render(){
    return (
      <div className="container-fluid">
      <div>
        <NavBar
          user={this.state.user}
          onNavLinkClick={this.onNavLinkClick}
         />
        {this.state.page === 'home' ? <EntrySummaries summaries={summaries} /> : ""} 
        {this.state.page === 'entry' ? <Entry entry={entry} user={userinfo} /> : ""} 
        {this.state.page === 'login' ? <LoginForm onSubmit={this.login} /> : ""} 
        {this.state.page === 'logout' ? <Logout page='login' onClick={this.onNavLinkClick} /> : ""} 
        {this.state.page === 'userlist' ? <Users users={userlist} /> : ""}
        {this.state.page === 'myEntries' ? <EntrySummaries summaries={mysummaries} /> : ""}
        {this.state.page === 'newEntry' ? <NewEntry /> : ""}
        {this.state.page === 'register' ? <Registration register={this.register} /> : ""}
      </div>
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  appcontainer
);