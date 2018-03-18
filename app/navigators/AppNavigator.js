import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, StyleSheet, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator, DrawerItems, NavigationActions } from 'react-navigation';
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import Cashier from '../Cashier';
import A from './a'
// import Icon from 'react-native-vector-icons/EvilIcons';
//CONSTANTS
import { Colors, Fonts } from '../constant';
var contentOptions = {
  activeTintColor: '#e91e63',
  style: {
    marginVertical: 0,
  }
}
// ------------------------------------------------------------------
const backAction = NavigationActions.back()
// -------------------------------------------------
// main app screens
import HomeStack from './HomeStack';
import ProductsStack from './ProductsStack';
import ReportsStack from './ReportsStack';
import DuesStack from './DuesStack';
import SettingsStack from './SettingsStack';
// ============================================================
const CustomDrawerContentComponent = (props) => (
  <View style={{ flex: 1, backgroundColor: Colors.real_dark }}>
    <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
    </View>
    <DrawerItems {...props} />
  </View>
);
// =========================== STYLESHEET ===========================
var styles = StyleSheet.create({
  logocontainer: { flexDirection: 'column', height: 100, justifyContent: 'center', alignItems: 'center', top: 0, },
  logo: { width: 250, resizeMode: 'contain', alignItems: 'center', top: 0,},
});
// ============================================================
const InnerNavigator = DrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: <Text style={{ fontFamily: Fonts.brand, fontSize: 22, alignSelf: 'center', color: Colors.light, margin: 10, marginLeft: 10 }} >Cashier</Text>,
      drawerIcon: ({tintColor}) => {}
    }
  },
  Products: {
    screen: ProductsStack,
    navigationOptions: {
      drawerLabel: <Text style={{ fontFamily: Fonts.brand, fontSize: 22, alignSelf: 'center', color: Colors.light, margin: 10, marginLeft: 10 }} >Products</Text>
    }
  },
  Reports: {
    screen: ReportsStack,
    navigationOptions: {
      drawerLabel: <Text style={{ fontFamily: Fonts.brand, fontSize: 22, alignSelf: 'center', color: Colors.light, margin: 10, marginLeft: 10 }} >Reports</Text>
    }
  },
  Dues: {
    screen: DuesStack,
    navigationOptions: {
      drawerLabel: <Text style={{ fontFamily: Fonts.brand, fontSize: 22, alignSelf: 'center', color: Colors.light, margin: 10, marginLeft: 10 }} >Dues</Text>
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      drawerLabel: <Text style={{ fontFamily: Fonts.brand, fontSize: 22, alignSelf: 'center', color: Colors.light, margin: 10, marginLeft: 10 }} >Settings</Text>
    }
  }
}, {
    contentComponent: CustomDrawerContentComponent,
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#000',
      activeBackgroundColor: Colors.accent_1,
    }
  }
);
// ============================================================
export const AppNavigator = StackNavigator({
  Login: { screen: A },
  Main: { screen: InnerNavigator }
}, {
    initialRouteName: A,
    headerMode: 'none',
  });
// ============================================================

// ============================================================
class AppWithNavigationState extends React.Component {
  componentDidMount() {
    console.log("BACKHANDLED")
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    console.log(nav)
    dispatch(NavigationActions.back());
    return true;

  };

  render() {
    const { dispatch, nav } = this.props;
    const addListener = createReduxBoundAddListener("root");
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
      addListener
    });
    return (
    <AppNavigator navigation={navigation} />
    )
  }
}
// ======================== REDUX CONNECTORS ========================
AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  nav: state.nav,
});
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})
// ==================================================================
export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);