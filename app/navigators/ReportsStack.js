import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {  StackNavigator, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import Cashier from '../Cashier';
import { Colors, Fonts } from '../constant';
// REPORTS
import ReportPassPage from '../components/reports/ReportPassPage';
import ReportDay from '../components/reports/ReportDay';
import SpecificSaleReport from '../components/reports/SpecificSaleReport'
//NAV ACTION
const backAction = NavigationActions.back()
// ============================================================
// ============================================================
// ProductsScreen
const ReportsStack = StackNavigator({
    // ------------------------------------------------------------------
    ReportPass: {
        screen: ReportPassPage,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Enter Passcode</Text>,
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
    Reports: {
        screen: ReportDay,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Reports</Text>,
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
    SpecificSaleReport: {
        screen: SpecificSaleReport,
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
    }, 
    {}
)
// ==================================================================
export default ReportsStack;
