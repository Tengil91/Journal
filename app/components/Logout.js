import React from 'react';
export class Logout extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    let pageloader = this.props.onClick;
    pageloader(this.props.page);
  }
  render(){
    return (
      <div>
        <p>Du har loggat ut</p>
        <button onClick={this.handleClick}>Logga in</button>
      </div>
    );
  }
}