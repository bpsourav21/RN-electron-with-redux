import React, { Component } from 'react'
import { Platform, StyleSheet, View, Picker, TouchableOpacity, DrawerLayoutAndroid, Text,Image } from 'react-native';
import { connect } from 'react-redux';
import { Link, withRouter, NavLink } from "react-router-dom";
//import actions

//import colors
import colors from '../colors'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    _renderHeader() {
        return (
            <View style={ styles.header }>
                <View style={ styles.userInfosHolder }>
                    <Image style={ styles.avatar } source={{ uri: 'https://scontent-frt3-1.cdninstagram.com/t51.2885-15/s640x640/e15/15623603_1636005733360687_308770619158167552_n.jpg' }} />
                    <View style={ styles.userInfos }>
                        <Text type='h1White' style={ styles.username }>Username</Text>
                        <Text type='h5White'>View and edit profile</Text>
                    </View>

                </View>
            </View>
        )
    }
 onNavClick(link){
    this.props.history.push(link)
 }
    render() {
        return (
            <View style={[styles.sideMenu]}>
                  <View style={{ paddingHorizontal: 0 }}>
                        { this._renderHeader() }
                      <TouchableOpacity onClick={()=>this.onNavClick("/")} style={[ styles.menu, { backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 5} ]}>
                            {/* <Icon name='home' color={colors.txtWhite} size={24} /> */}
                            <Text style={styles.menuText} type='h5White'>Home</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onClick={()=>this.onNavClick("/table")} style={ styles.menu }>
                            {/* <Icon name='user-o' color={colors.txtWhite} size={24} /> */}
                            <Text style={styles.menuText} type='h5White'>Table</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onClick={()=>this.onNavClick("/items")} style={ styles.menu }>
                            {/* <Icon name='cog' color={colors.txtWhite} size={24} /> */}
                            <Text style={styles.menuText} type='h5White'>All Items</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onClick={()=>this.onNavClick("/reports")} style={ styles.menu }>
                            {/* <Icon name='cog' color={colors.txtWhite} size={24} /> */}
                            <Text style={styles.menuText} type='h5White'>Reports</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onClick={()=>this.onNavClick("/settings")} style={ styles.menu }>
                            {/* <Icon name='cog' color={colors.txtWhite} size={24} /> */}
                            <Text style={styles.menuText} type='h5White'>Settings</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onClick={()=>this.onNavClick("/login")} style={ styles.menu }>
                            {/* <Icon name='cog' color={colors.txtWhite} size={24} /> */}
                            <Text style={styles.menuText} type='h5White'>Login</Text>
                      </TouchableOpacity>
                  </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sideMenu: {
        //position: 'absolute',
       // flex:1,
        backgroundColor: '#eee',
        flex: 1,
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    menuText: {
        marginLeft: 20
    },
    header: {
        marginTop: 20,
        marginBottom: 20
    },
    userInfosHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    userInfos: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        fontWeight: '700'
    }
})

// ======================== REDUX CONNECTORS ========================
const mapStateToProps = (state) => {
    return {
    };
};

// =================================================================
export default withRouter(connect(mapStateToProps)(Menu));