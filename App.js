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
<<<<<<< HEAD
=======

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 21,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
>>>>>>> 74e0d969017b3c18c7ab39e1cf1b5cce460e3c9a
