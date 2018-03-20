import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers, BackHandler } from 'redux';
import { Provider, connect } from 'react-redux';
//components
import A from './components/a'
import B from './components/b'
import { Switch, Route } from 'react-router';

class Routes extends Component {
  render() {
    return (
      <Switch>
      <Route path="/b" component={B} />
      <Route path="/" component={A} />
    </Switch>
    )
  }
}

export default Routes