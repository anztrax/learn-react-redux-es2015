import React, { PropTypes } from 'react';
import Header from './common/Header';

export default class App extends React.Component{
  static get propTypes(){
    return {
      children : PropTypes.object.isRequired
    };
  }

  render(){
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}