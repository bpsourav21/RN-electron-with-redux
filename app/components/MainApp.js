import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { View, Dimensions } from 'react-native'
const window = Dimensions.get('window');
import Menu from './Menu'
//import actions

//import css file



class MainApp extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', height: window.height, }} >
                <View style={{ flex: 1 }} >
                    <Menu />
                </View>
                <View style={{ flex: 3 }} >
                    {this.props.children}
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    };
};

export default withRouter(connect(mapStateToProps)(MainApp));