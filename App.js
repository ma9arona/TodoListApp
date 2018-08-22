import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/homeScreen';
import SettingsScreen from './components/settingsScreen';
import AddScreen from './components/addScreen';

const RouteStack = createStackNavigator({
  Todos : HomeScreen,
  Settings : SettingsScreen,
  Add : AddScreen,
}, {
  initialRouteName : 'Todos',
  navigationOptions : {
    headerStyle : {
      backgroundColor : "#f228f1"
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <RouteStack />
    );
  }
}
