import React from 'react';
import PropTypes from 'prop-types';
import { Text} from 'react-native';
import { connect } from 'react-redux';
import {  StackNavigator, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import Cashier from '../Cashier';
//CONSTANTS
import { Colors, Fonts } from '../constant';
// main app screens
import MainApp from '../components/main/MainApp';
import Scanner from '../components/main/items/Scanner';
import OrderList from '../components/main/order/OrderList';
import DueOrder from '../components/main/order/DueOrder';
import Charge from '../components/main/payment/Charge';
import PrintingReceipt from '../components/main/payment/PrintingReceipt';
// ------------------------------------------------------------------
const backAction = NavigationActions.back()
// ------------------------------------------------------------------
const HomeStack = StackNavigator({
    Home: {
      screen: MainApp,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Cashier</Text>,
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
    BarcodeScanner: {
      screen: Scanner,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Scan Barcode</Text>,
        headerLeft: (<Icon name="chevron-left" size={46} style={{ margin: 10 }} color={Colors.primary} onPress={() => { navigation.dispatch(backAction) }} />),
        headerRight: null,
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
    Orders: {
      screen: OrderList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Receipt</Text>,
        headerRight: (
          <Icon name="close" size={46} color={Colors.primary} onPress={() => { navigation.dispatch(backAction) }} style={{ margin: 10 }} />
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
    Charge: {
      screen: Charge,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Charge</Text>,
        headerLeft: (<Icon name="chevron-left" size={46} style={{ margin: 10 }} color={Colors.primary} onPress={() => { navigation.dispatch(backAction) }} />),
        headerRight: null,
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
    Due: {
      screen: DueOrder,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Customer Information</Text>,
        headerLeft: (<Icon name="chevron-left" size={46} style={{ margin: 10 }} color={Colors.primary} onPress={() => { navigation.dispatch(backAction); navigation.dispatch({type: "CLEAR_HELD_SALE"}) }} />),
        headerRight: null,
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
    PrintingReceipt: {
      screen: PrintingReceipt,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Charge</Text>,
        headerRight: null,
        headerLeft: null,
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
  });
  // ============================================================
  export default HomeStack