import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { View, Text } from 'react-native'
//import actions

//import others file



class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ flex: 1, }} >
                <Text> this is Reports page </Text>
                <Text> this is Reports page </Text>
                <Text> this is Reports page </Text>
                <Text> this is Reports page </Text>
                <Text> this is Reports page </Text>
                <Text> this is Reports page </Text>
                <Text> this is Reports page </Text>
                <Text> this is Reports page </Text>
                <Text> this is Reports page </Text>
                <Text> this is Reports page </Text>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    };
};

export default withRouter(connect(mapStateToProps)(Reports));