import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { View, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
//import actions

//import others file
//  const usernameImg = require( '../images/username.png')
//  const passwordImg = require( '../images/password.png')
//  const eyeImg = require( '../images/eye_black.png')



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    loginButtonPressed(){
        this.props.history.push("/")
    }
    render() {
        return (
            <View style={styles.container} >
                <KeyboardAvoidingView behavior="padding" >
                    <View style={styles.inputWrapper} >
                        <TextInput
                            style={styles.input}
                            placeholder={"Username"}
                            secureTextEntry={false}
                            autoCorrect={false}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.inputWrapper} >
                        <TextInput
                            style={styles.input}
                            placeholder={"Password"}
                            secureTextEntry={true}
                            autoCorrect={false}
                            placeholderTextColor="black"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.inputWrapper} >
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.loginbutton}
                            onPress={()=>this.loginButtonPressed()}>
                            <Text style={{textAlign: 'center', color:"#fff", padding: 15}}>Login</Text>
                        </TouchableOpacity>
                    </View >
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(24, 111, 212, 0.4)',
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: 340,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#00e',
    },
    inputWrapper: {
        padding: 10
    },
    inlineImg: {
        // position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },
    loginbutton: {
        //position: 'absolute',
        backgroundColor: 'blue',
        borderRadius: 10,
        // height: 30,
        // width: 100
    }
});

export default withRouter(connect(mapStateToProps)(Login));