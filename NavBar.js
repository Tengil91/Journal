import { NavLink } from './NavLink.js';
export let NavBar = props => {
  let loggedin = [{
    page: 'home',
    linktext: 'Start'
  }, {
    page: 'logout',
    linktext: 'Logga ut'
  }, {
    page: 'userlist',
    linktext: 'Se användare'
  }, {
    page: 'myEntries',
    linktext: 'Mina inlägg'
  }, {
    page: 'newEntry',
    linktext: 'Skriv ett inlägg'
  }];
  let loggedout = [{
    page: 'home',
    linktext: 'Start'
  }, {
    page: 'register',
    linktext: 'Registrera dig'
  }, {
    page: 'login',
    linktext: 'Logga in'
  }, {
    page: 'userlist',
    linktext: 'Se användare'
  }];
  let navlinks = !props.user ? loggedout : loggedin;
  return React.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light"
  }, React.createElement("a", {
    className: "navbar-brand",
    href: "#",
    "data-page": "home",
    onClick: props.handleNavClick
  }, "My Journal"), React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarNavAltMarkup",
    "aria-controls": "navbarNavAltMarkup",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, React.createElement("span", {
    className: "navbar-toggler-icon"
  })), React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNavAltMarkup"
  }, React.createElement("div", {
    className: "navbar-nav"
  }, navlinks.map(link => {
    return React.createElement(NavLink, {
      navlink: link,
      onNavLinkClick: props.onNavLinkClick
    });
  }))));
};