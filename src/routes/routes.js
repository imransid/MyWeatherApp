import React, {Component} from 'react';
// import {Dimensions} from 'react-native';
// import {createAppContainer, createDrawerNavigator} from 'react-navigation';
// import SlideDrawer from '../components/Menu/MenuDrawer';
import WEATHER from '../components/Weather/Weather';

export default class Routes extends Component {
  render() {
    return <WEATHER />;
  }
}

// const WIDTH = Dimensions.get('window').width;

// const DrawerConfig = {
//   initialRouteName: 'WEATHER',
//   drawerWidth: WIDTH * 0.83,
//   contentComponent: ({navigation}) => {
//     return <SlideDrawer props={navigation} />;
//   },
// };

// const DrawerNavigator = createDrawerNavigator(
//   {
//     WEATHER: {
//       screen: WEATHER,
//     },
//   },
//   //DrawerConfig,
// );

// // DrawerNavigator
// const AppContainer = createAppContainer(DrawerNavigator);

//  Routes;
