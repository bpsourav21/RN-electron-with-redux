import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import Settings from '../components/settings/Settings';
import MasterSettings from '../components/settings/MasterSettings';
//CONSTANT
import { Colors, Fonts } from '../constant';
//NAV ACTION
const backAction = NavigationActions.back()
const SettingsStack = StackNavigator({
  // ------------------------------------------------------------------  
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Settings</Text>,
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
    MasterSettings: {
      screen: MasterSettings,
      navigationOptions: ({ navigation }) => ({
          headerTitle: <Text style={{ fontSize: 22, alignSelf: 'center', textAlign: 'center', fontFamily: Fonts.brand, color: Colors.light }}>Master Settings</Text>,
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
})
// ==================================================================
export default SettingsStack;