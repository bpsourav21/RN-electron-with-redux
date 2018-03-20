import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
//import actions

//import css file

import { View } from 'react-native'

class MainApp extends Component {
    render() {
        return (
            <View >
                {this.props.children}
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    };
};

export default withRouter(connect(mapStateToProps)(MainApp));