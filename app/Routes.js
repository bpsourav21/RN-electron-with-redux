import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers, BackHandler } from 'redux';
import { Provider, connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Switch, Route } from 'react-router';
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

  render() {
    return (
      <Switch>
        <Route path="/settings" component={Settings} />
        <Route path="/reports" component={Reports} />
        <Route path="/items" component={Items} />
        <Route path="/table" component={Table} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
        
      </Switch>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps)(Routes));