export class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(e) {
    e.preventDefault();
    let pageloader = this.props.onNavLinkClick;
    pageloader(this.props.navlink.page);
  }

  render() {
    return React.createElement("a", {
      className: "nav-item nav-link",
      href: "#",
      onClick: this.handleNavClick
    }, this.props.navlink.linktext);
  }

}