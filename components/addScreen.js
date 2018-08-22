import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default class AddScreen extends React.Component {

  static navigationOptions = {
    title : "Add Screen"
  }

  render() {
    return (
      <View style={{
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
      }}>
        <Text>Add screen</Text>
      </View>
    );
  }
}
