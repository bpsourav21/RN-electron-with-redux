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

export default class A extends Component{
 
  render() {

    return (
      <View style={{backgroundColor:"#eef"}}>
          <Text onPress={()=>console.log("hello aaaaaa")}>hello A</Text>
          <Link to="/b">to Counter</Link>
      </View>
    )
  }
}
