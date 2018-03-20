
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

class MainApp extends Component {

    render() {
        return (
            <View >
                {this.props.children}
            </View>
        )
    }
}
export default MainApp