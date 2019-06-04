export class NavBar extends React.Component {
  render(){
    if(!this.props.loggedIn){
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">My Journal</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"   data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"   aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">Start</a>
              <a className="nav-item nav-link" href="#">Registrera dig</a>
              <a className="nav-item nav-link" href="#">Logga in</a>
              <a className="nav-item nav-link" href="#">Se användare</a>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Välkommen {this.props.user.name}!</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"   data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"   aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">Start</a>
              <a className="nav-item nav-link" href="#">Logga ut</a>
              <a className="nav-item nav-link" href="#">Se användare</a>
              <a className="nav-item nav-link" href="#">Mina Inlägg</a>
              <a className="nav-item nav-link" href="#">Skriv Inlägg</a>
            </div>
          </div>
        </nav>
      );

    }
  }
}