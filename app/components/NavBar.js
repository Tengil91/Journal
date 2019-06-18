import React from 'react';
import { NavLink } from './NavLink.js';

export class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
  }
  handleNavClick(e){
    e.preventDefault();
    let link = this.props.onNavLinkClick;
    link('home');
  }
  render(){
    let loggedin = [{page: 'home', linktext: 'Start'}, {page: 'logout', linktext: 'Logga ut'}, {page: 'userlist', linktext: 'Se användare'}, {page: 'myEntries', linktext: 'Mina inlägg'}, {page: 'newEntry', linktext: 'Skriv ett inlägg'}];
    let loggedout = [{page: 'home', linktext: 'Start'}, {page: 'register', linktext: 'Registrera dig'}, {page: 'login', linktext: 'Logga in'}, {page: 'userlist', linktext: 'Se användare'}];
    let navlinks = !this.props.user ? loggedout : loggedin;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light row">
        <a className="navbar-brand" href="#" data-page='home' onClick={this.handleNavClick}>My Journal</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"   data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"   aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {navlinks.map((link, i) => {
              return <NavLink navlink={link} onNavLinkClick={this.props.onNavLinkClick} key={'link'+i} />;
            })}
          </div>
        </div>
      </nav>
    );
  }
}