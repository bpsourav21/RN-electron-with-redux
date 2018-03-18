// @flow

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
//  import AppWithNavigationState from './navigators/AppNavigator';
 import store from './store/store.js'
import A from './components/a'

export default class App extends Component {

  render() {

    return (
      <Provider store={store}>
<A/>
      </Provider>
    )
  }
}
