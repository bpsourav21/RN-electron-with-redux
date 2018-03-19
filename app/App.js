import React, { Component } from 'react'
import {
  ActivityIndicator,
  Alert,
  Clipboard,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  WebView,
} from 'react-native'
import { createStore, applyMiddleware, combineReducers, BackHandler } from 'redux';
import { Provider, connect } from 'react-redux';
// import AppWithNavigationState from './navigators/AppNavigator';
import store from './store/store.js'
import A from './components/a'
import B from './components/b'
//  import { StackNavigator } from 'react-navigation'

// import { Route, Switch, Redirect, withRouter, Router } from "react-router-dom";
// import { Router, Route } from 'react-router'
// import createBrowserHistory from 'history/createBrowserHistory'
// import { Match, Miss, MemoryRouter as Router } from 'react-router';

// const customHistory = createBrowserHistory()

// const RootStack = StackNavigator({
//   Home: {
//     screen: A,
//   },
// });

export default class App extends Component {

  render() {

    return (
      <Provider store={store}>
        {/* <Router history={history}>
          <div>
            <Route path="/" component={A} />

            <Route path="/b" component={B} />
          </div>
        </Router> */}
       <View> 
       <A/>
        <B/>
       </View>
      </Provider>
    )
  }
}
