import React from 'react';
import {Button, FormGroup, FormControl, ControlLabel, Col, Form} from 'react-bootstrap';
import { connect }            from 'react-redux';
import * as Actions from 'actions/LoginActions';
import { bindActionCreators } from 'redux';
import LoginHeader from 'components/LoginHeader';
import {Transition} from 'react-router';

@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = (event) => {
      event.preventDefault();
      this.props.actions.login(event.target.username.value,event.target.password.value, this.props.history);
      // console.log(event.target.username.value,event.target.password.value);
    }
  }
  componentWillMount(){
    let loggedIn = typeof sessionStorage == 'object'?sessionStorage.getItem('userName')?true:false:false;
    if(loggedIn){
      this.props.history.push('/');
    }
    // console.log(this.props.history.transitionTo);
  }
  render() {
    return (
      <div id="loginForm" style={{textAlign:"center"}} className="col-md-6 col-md-offset-3">
        <LoginHeader />
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col sm={6} smOffset={3}><FormControl type="text" placeholder="Enter Username" name="username" /></Col>
          </FormGroup>
          <FormGroup>
            <Col sm={6} smOffset={3}><FormControl type="password" placeholder="Enter Password" name="password" /></Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <Button bsStyle='primary' type='submit'>Sign In</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state){
    return({})
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(Actions, dispatch)
  }
}

// export default connect(mapStateToProps)(Login);
