import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import TodoItem from './components/todoItem';
import {createMaterialTopTabNavigator} from 'react-navigation';


class HomeScreen extends Component {

  items = [
    { title : "this is a test Title", date : "05/11", details : "these are some details !!!"},
    { title : "this is a test Title", date : "05/11", details : "these are some details !!!"},
    { title : "this is a test Title", date : "05/11", details : "these are some details !!!"},
    { title : "this is a test Title", date : "05/11", details : "these are some details !!!"},
    { title : "this is a test Title", date : "05/11", details : "these are some details !!!"},
    { title : "this is a test Title", date : "05/11", details : "these are some details !!!"},
    { title : "this is a test Title", date : "05/11", details : "these are some details !!!"},
  ];

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.items}
          renderItem={({ item }) => (
            <TodoItem title={item.title} date={item.date} details={item.details} />
          )}
        />
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings screen</Text>
      </View>
    );
  }
}

const RouteStack = createMaterialTopTabNavigator({
  Todos : {
    screen : HomeScreen,
  },
  Settings : {
    screen : SettingsScreen,
  }
}, {
  initialRouteName : 'Todos',

});

export default class App extends Component {
  render() {
    return <RouteStack />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcf5ff',
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
