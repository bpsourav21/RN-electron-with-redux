import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableHighlight, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator, NavigationActions, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import Cashier from '../Cashier';
//INVENTORY
import Products from '../components/inventory/Products';
import AllItems from '../components/inventory/AllItems';
import Item from '../components/inventory/Item';
import Categories from '../components/inventory/Categories';
import Category from '../components/inventory/Category';
import Units from '../components/inventory/Units';
import Unit from '../components/inventory/Unit';
//CONSTANTS
import { Colors, Fonts } from '../constant';
//NAV ACTIONS
const backAction = NavigationActions.back()
// ============================================================
// ============================================================
// ProductsScreen
const ProductsStack = StackNavigator({
    // ------------------------------------------------------------------
    Products: { 
        screen: Products,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Products</Text>,
            headerLeft: (
                <Icon name="navicon" size={46} color={Colors.primary} onPress={() => navigation.navigate('DrawerOpen')} style={{ margin: 10 }} />
            ),
            headerStyle: {
                elevation: 0,
                backgroundColor: Colors.real_dark,
                borderBottomColor: "#292E37",
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                fontFamily: Fonts.brand,
                textAlign: 'center'
            },
            titleStyle: {
                textAlign: 'center'
            }
        })
    },
    // ------------------------------------------------------------------
    Categories: {
        screen: Categories,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Categories</Text>,
            headerLeft: (
                <Icon name="chevron-left" size={46} color={Colors.primary} onPress={() => navigation.dispatch(backAction)} style={{ margin: 10 }} />
            ),
            headerStyle: {
                elevation: 1,
                backgroundColor: Colors.real_dark,
                borderBottomColor: "#292E37",
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                fontFamily: Fonts.brand,
                textAlign: 'center'
            },
            titleStyle: {
                textAlign: 'center'
            }
        })
    },
    // ------------------------------------------------------------------
    Units: {
        screen: Units,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Unit</Text>,
            headerLeft: (
                <Icon name="chevron-left" size={46} color={Colors.primary} onPress={() => navigation.dispatch(backAction)} style={{ margin: 10 }} />
            ),
            headerStyle: {
                elevation: 0,
                backgroundColor: Colors.real_dark,
                borderBottomColor: "#292E37",
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                fontFamily: Fonts.brand,
                textAlign: 'center'
            },
            titleStyle: {
                textAlign: 'center'
            }
        })
    },
    // ------------------------------------------------------------------
    AllItems: {
        screen: AllItems,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>All Items</Text>,
            headerLeft: (
                <Icon name="chevron-left" size={46} color={Colors.primary} onPress={() => navigation.dispatch(backAction)} style={{ margin: 10 }} />
            ),
            headerStyle: {
                elevation: 0,
                backgroundColor: Colors.real_dark,
                borderBottomColor: "#292E37",
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                fontFamily: Fonts.brand,
                textAlign: 'center'
            },
            titleStyle: {
                textAlign: 'center'
            }
        })
    },
    // ------------------------------------------------------------------
    Item: {
        screen: Item,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Item</Text>,
            headerLeft: (
                <Icon name="chevron-left" size={46} color={Colors.primary} onPress={() => { navigation.dispatch(backAction); navigation.dispatch({ type: "CLEAR_SELECTED_PRODUCT" }) }} style={{ margin: 10 }} />
            ),
            headerStyle: {
                elevation: 0,
                backgroundColor: Colors.real_dark,
                borderBottomColor: "#292E37",
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                fontFamily: Fonts.brand,
                textAlign: 'center'
            },
            titleStyle: {
                textAlign: 'center'
            }
        })
    },
    // ------------------------------------------------------------------
    Category: {
        screen: Category,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Category</Text>,
            headerLeft: (
                <Icon name="chevron-left" size={46} color={Colors.primary} onPress={() => navigation.dispatch(backAction)} style={{ margin: 10 }} />
            ),
            headerStyle: {
                elevation: 0,
                backgroundColor: Colors.real_dark,
                borderBottomColor: "#292E37",
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                fontFamily: Fonts.brand,
                textAlign: 'center'
            },
            titleStyle: {
                textAlign: 'center'
            }
        })
    },
    // ------------------------------------------------------------------
    Unit:{
        screen: Unit,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>ADD UNIT</Text>,
            headerLeft: (
                <Icon name="chevron-left" size={46} color={Colors.primary} onPress={() => navigation.dispatch(backAction)} style={{ margin: 10 }} />
            ),
            headerStyle: {
                elevation: 0,
                backgroundColor: Colors.real_dark,
                borderBottomColor: "#292E37",
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                fontFamily: Fonts.brand,
                textAlign: 'center'
            },
            titleStyle: {
                textAlign: 'center'
            }
        })
    }
    }, 
    {}
)
// ==================================================================
export default ProductsStack;