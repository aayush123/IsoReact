import React from 'react';

export default class AppView extends React.Component {
  componentWillMount(){
    let loggedIn = typeof sessionStorage == 'object'?sessionStorage.getItem('userName')?true:false:false;
    if(!loggedIn){
      this.props.history.push('/login');
    }
  }
  render() {
    return (
      <div id="app-view">
        {this.props.children}
      </div>
    );
  }
}
