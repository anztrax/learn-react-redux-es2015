import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>Administration</h1>
        <p>road to make responsive web apps</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}