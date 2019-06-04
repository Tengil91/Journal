export class NavBar extends React.Component {
  render() {
    if (!this.props.loggedIn) {
      return React.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light"
      }, React.createElement("a", {
        className: "navbar-brand",
        href: "#"
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
      }, React.createElement("a", {
        className: "nav-item nav-link active",
        href: "#"
      }, "Start"), React.createElement("a", {
        className: "nav-item nav-link",
        href: "#"
      }, "Registrera dig"), React.createElement("a", {
        className: "nav-item nav-link",
        href: "#"
      }, "Logga in"), React.createElement("a", {
        className: "nav-item nav-link disabled",
        href: "#"
      }, "Se anv\xE4ndare"))));
    } else {
      return React.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light"
      }, React.createElement("a", {
        className: "navbar-brand",
        href: "#"
      }, "V\xE4lkommen ", this.props.user.name, "!"), React.createElement("button", {
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
      }, React.createElement("a", {
        className: "nav-item nav-link active",
        href: "#"
      }, "Start"), React.createElement("a", {
        className: "nav-item nav-link",
        href: "#"
      }, "Logga ut"), React.createElement("a", {
        className: "nav-item nav-link disabled",
        href: "#"
      }, "Se anv\xE4ndare"), React.createElement("a", {
        className: "nav-item nav-link",
        href: "#"
      }, "Mina Inl\xE4gg"), React.createElement("a", {
        className: "nav-item nav-link",
        href: "#"
      }, "Skriv Inl\xE4gg"))));
    }
  }

}