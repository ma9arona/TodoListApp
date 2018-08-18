import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import TodoItem from './components/todoItem';

const Realm = require("realm");

let RouteView = createStackNavigator({
  Home : HomeScreen
},{
  initialRouteName : "Home"
});


export default class App extends Component {

  ComponentDidMount() {
    this.items = [
      {title : "This is a Title", date : "18/08", details :"this a dummy content that you should ignore completely"},
      {title : "This is a Title", date : "18/08", details :"this a dummy content that you should ignore completely"},
      {title : "This is a Title", date : "18/08", details :"this a dummy content that you should ignore completely"},
      {title : "This is a Title", date : "18/08", details :"this a dummy content that you should ignore completely"}
    ];
  }

  render() {
    return (
      <FlatList
        data={[this.items]}
        renderItem={( {item} ) => {
          <TodoItem title={item.title} date={item.date} details={item.details} />
        }}
      />
    );
  }
}
