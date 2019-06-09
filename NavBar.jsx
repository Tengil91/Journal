export class NavBar extends React.Component {
  render(){
    if(!this.props.user){
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#" onClick={this.props.onClickLoadHomePage}>My Journal</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"   data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"   aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#" onClick={this.props.onClickLoadHomePage}>Start</a>
              <a className="nav-item nav-link" href="#" onClick={this.props.onClickLoadRegistrationPage}>Registrera dig</a>
              <a className="nav-item nav-link" href="#" onClick={this.props.onClickLoadLoginPage}>Logga in</a>
              <a className="nav-item nav-link" href="#" onClick={this.props.onClickLoadUserlistPage}>Se användare</a>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#" onClick={this.props.onClickLoadHomePage}>Välkommen {this.props.user.name}!</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"   data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"   aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#" onClick={this.props.onClickLoadHomePage}>Start</a>
              <a className="nav-item nav-link" href="#" onClick={this.props.onClickLoadLogoutPage}>Logga ut</a>
              <a className="nav-item nav-link" href="#" onClick={this.props.onClickLoadUserlistPage}>Se användare</a>
              <a className="nav-item nav-link" href="#" onClick={this.props.onClickLoadMyEntriesPage}>Mina Inlägg</a>
              <a className="nav-item nav-link" href="#" onClick={this.props.onClickLoadNewEntryPage}>Skriv Inlägg</a>
            </div>
          </div>
        </nav>
      );

    }
  }
}