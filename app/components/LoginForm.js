import React from 'react';
export class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(e.target.querySelector('#usernameinput').value);
    console.log(e.target.querySelector('#passwordinput').value);
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="usernameinput">Användarnamn</label>
          <input type="text" className="form-control" id="usernameinput" placeholder="Användarnamn" />
        </div>
        <div className="form-group">
          <label htmlFor="passwordinput">Lösenord</label>
          <input type="password" className="form-control" id="passwordinput" placeholder="Lösenord" />
        </div>
        <button type="button" className="btn btn-primary">Logga in</button>
      </form>
    );
  }
}