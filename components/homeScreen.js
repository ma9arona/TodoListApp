import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import TodoItem from './todoItem';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions =  {
    title : "Home",

  }

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
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Add")}>
              <Icon name="plus" size={30} />
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#fcf2ff"
  },
  btn : {
    position : 'absolute',
    bottom : 20,
    right : 20,
    backgroundColor : "#f228f1",
    borderRadius : 30,
    width : 60,
    height : 60,
    justifyContent : "center",
    alignItems : "center"
  }
});
