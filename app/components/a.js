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

export default class A extends Component{
 
  render() {

    return (
      <View >
          <Text onPress={()=>console.log("hello aaaaaa")}>hello A</Text>
      </View>
    )
  }
}
