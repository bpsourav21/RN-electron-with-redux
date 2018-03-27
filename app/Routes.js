import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers, BackHandler } from 'redux';
import { Provider, connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Switch, Route, Redirect } from 'react-router';
//components
import Home from './components/Home'
import Table from './components/Table'
import Items from './components/Items'
import Reports from './components/Reports'
import Settings from './components/Settings'
import Login from './components/Login'


class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  isAuthenticated() {
    if (this.props.token) {
      return true;
    } else {
      return false;
    }
  }


  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.isAuthenticated() ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
          )
      )} />
    )

    const SkipRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.isAuthenticated() ? (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />

        ) : (
            <Component {...props} />
          )
      )} />
    )
    return (
      <Switch>
        <Route path="/settings" component={Settings} />
        <Route path="/reports" component={Reports} />
        <Route path="/items" component={Items} />
        <PrivateRoute path="/table" component={Table} />
        <SkipRoute path="/login" component={Login} />
        <Route exact path="/" component={Home} />

      </Switch>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    token: false //state.auth.token,
  };
};

export default withRouter(connect(mapStateToProps)(Routes));