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
import Routes from './Routes'
import store from './store/store.js'
import MainApp from './components/MainApp'
import { ConnectedRouter } from 'react-router-redux';
import {Router } from 'react-router';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <MainApp>
            <Routes/>
          </MainApp>
        </Router>
      </Provider>
    )
  }
}

export default App