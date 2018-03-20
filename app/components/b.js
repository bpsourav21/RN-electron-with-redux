// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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

export default class B extends Component {

  render() {

    return (
      <View style={{backgroundColor:"#eee"}}>
        <Text onPress={() => console.log("hello B")}>hello B</Text>
        <Link to="/">to Counter</Link>
      </View>
    )
  }
}
