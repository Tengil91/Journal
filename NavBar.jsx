import { NavLink } from './NavLink.js';

export let NavBar = (props) => {

    let loggedin = [{page: 'home', linktext: 'Start'}, {page: 'logout', linktext: 'Logga ut'}, {page: 'userlist', linktext: 'Se användare'}, {page: 'myEntries', linktext: 'Mina inlägg'}, {page: 'newEntry', linktext: 'Skriv ett inlägg'}];
    let loggedout = [{page: 'home', linktext: 'Start'}, {page: 'register', linktext: 'Registrera dig'}, {page: 'login', linktext: 'Logga in'}, {page: 'userlist', linktext: 'Se användare'}];
    let navlinks = !props.user ? loggedout : loggedin;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" data-page='home' onClick={props.handleNavClick}>My Journal</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"   data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"   aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {navlinks.map(link => {
              return <NavLink navlink={link} onNavLinkClick={props.onNavLinkClick} />;
            })}
          </div>
        </div>
      </nav>
    );
}