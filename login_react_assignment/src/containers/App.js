import React, {Component} from 'react';
import './App.css';
import Header from '../components/Header';
import {Route, withRouter} from 'react-router-dom';
import Home from '../components/Home';
import {Switch} from 'react-router';
import  Frgtpwdnotification  from '../components/Resetpassword';
import Forgetpwd from '../components/Forgetpwd';
import Login from '../components/Login';
import {connect} from 'react-redux';


class App extends Component {

  constructor(props) {
    super(props);
    this.onForgetPassSuccess = this.onForgetPassSuccess.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
   
  }

  componentWillMount() {
    
  }

  onForgetPassSuccess(firstName, lastName) {
    this.setState({firstName, lastName})
  }

  onLoginSuccess(firstName, lastName) {

    this.setState({firstName, lastName, isLoggedIn: true})
  }

  

  render() {
    return (
      <div className="container">
      
        <Header/>
        
        <main>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/reset-password-notification" component={ Frgtpwdnotification }/>
            <Route path="/forget-password" render={props => <Forgetpwd {...props} onForgetPassSuccess={this.onForgetPassSuccess}/>}/>
            <Route path="/" render={props => <Login {...props} onLoginSuccess={this.onLoginSuccess}/>}/>
            
          </Switch>
        </main>
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  
    isLoggedIn: state.usersState.toJS().isLoggedIn,
    firstName: state.usersState.toJS().firstName,
    lastName: state.usersState.toJS().lastName
  }
}

function mapDispatchToProps(dispatch) {
  return {
 store={}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
