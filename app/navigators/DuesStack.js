import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
//CONSTANTS
import { Colors, Fonts } from '../constant';
//NAV ACTION
const backAction = NavigationActions.back()
//DUE COMPONENTS
import DuesHome from '../components/dues/DuesHome';
import DueItem from '../components/dues/DueItem';
import SpecificDueItem from '../components/dues/SpecificDueItem';
import DeleteDueByAmount from '../components/dues/DeleteDueByAmount';
// ------------------------------------------------------------------
const DuesStack = StackNavigator({
  Dues: {
    screen: DuesHome,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Customer Dues</Text>,
      headerLeft: (
        <Icon name="navicon" size={46} color={Colors.primary} onPress={() => navigation.navigate('DrawerOpen')} style={{ margin: 10 }} />
      ),
      headerStyle: {
        elevation: 0,
        backgroundColor: Colors.real_dark,
        borderBottomColor: "#292E37",
        borderBottomWidth: 1,
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
  DueItem: {
    screen: DueItem,
    navigationOptions: ({ navigation }) => ({

      headerLeft: (
        <Icon name="chevron-left" size={46} color={Colors.primary} onPress={() => { navigation.dispatch(backAction) }} style={{ margin: 10 }} />
      ),
      headerStyle: {
        elevation: 0,
        backgroundColor: Colors.real_dark,
        borderBottomColor: "#292E37",
        borderBottomWidth: 1,
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
  SpecificDueItem: {
    screen: SpecificDueItem,
    navigationOptions: ({ navigation }) => ({

      headerLeft: (
        <Icon name="chevron-left" size={46} color={Colors.primary} onPress={() => { navigation.dispatch(backAction); }} style={{ margin: 10 }} />
      ),
      headerStyle: {
        elevation: 0,
        backgroundColor: Colors.real_dark,
        borderBottomColor: "#292E37",
        borderBottomWidth: 1,
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
  DeleteDueByAmount: {
    screen: DeleteDueByAmount,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Clear Dues By Amount</Text>,
      headerLeft: (
        <Icon name="chevron-left" size={46} color={Colors.primary} onPress={() => { navigation.dispatch(backAction); navigation.dispatch({ type: "CLEAR_ZZZZZ" }) }} style={{ margin: 10 }} />
      ),
      headerStyle: {
        elevation: 0,
        backgroundColor: Colors.real_dark,
        borderBottomColor: "#292E37",
        borderBottomWidth: 1,
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
})
// ==================================================================
export default DuesStack;