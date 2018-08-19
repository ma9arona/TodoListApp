import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  NativeModules,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IoIcons from 'react-native-vector-icons/Ionicons';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


export default class TodoItem extends React.Component {

  optionsImg = [
    { comp : (<Icon name="trash-o" size={30} color="#555" />) },
    { comp : (<Icon name="edit" size={30} color="#555" />) },
    { comp : (<IoIcons name="md-time" size={30} color="#555" />) }
  ];

  btnImgs = [(<Icon name="chevron-up" size={20} />), (<Icon name="chevron-down" size={20} />)];

  constructor(props) {
    super(props);
    this.state = { animHeight : 0, padding : 0, reduced : true };
  }

  _reduce() {
    LayoutAnimation.spring();
    this.setState({ animHeight : 0, padding : 0, reduced : true });
  }

  _extand() {
    LayoutAnimation.spring();
    this.setState({ animHeight : 50, padding : 7, reduced : false });
  }

  render() {
    let images = this.optionsImg.map((item, i) => (
      <TouchableOpacity key={i}>
        <View style={[styles.imgCont, { padding : this.state.padding}]}>
          {item.comp}
        </View>
      </TouchableOpacity>
    ));

    let btn = this.state.reduced? this.btnImgs[1] : this.btnImgs[0] ;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titleCont}>
            <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
            <Text style={styles.date}>{this.props.date}</Text>
          </View>
          <View style={styles.detailCont}>
            <Text style={styles.detail} numberOfLines={2}>{this.props.details}</Text>
          </View>
        </View>
        <View style={[styles.options, {height : this.state.animHeight}]}>
          {images}
        </View>
        <TouchableOpacity
            onPress={this.state.reduced? this._extand.bind(this):this._reduce.bind(this)}>
          <View style={styles.extandBtn}>
              {btn}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#eee",
    margin : 5,
    borderRadius : 10,
    width : "97%"
  },
  content : {
    height : 100, // costumize it later
    padding : 10,
    borderBottomWidth : StyleSheet.hairlineWidth,
    borderBottomColor : "#999"
  },
  titleCont : {
    flexDirection : "row",
    justifyContent : "space-between"
  },
  title : {
    fontSize : 20,
    fontWeight : "bold",
    color : "#333"
  },
  date : {
    fontSize : 15,
    color : "#666",
    fontStyle : 'italic'
  },
  detailCont : {
    padding : 5,
    paddingLeft : 10
  },
  detail : {
    fontSize : 17,
    fontStyle : "italic"
  },
  options : {
    flexDirection : 'row',
    justifyContent : "space-evenly",
    alignItems : "flex-end",
  },
  extandBtn : {
    flexDirection : "row",
    justifyContent : "flex-end",
    alignItems : "center",
    padding : 3,
    paddingRight : 20
  },
  imgCont : {
    backgroundColor : "rgba(210, 210, 210, 0.8)",
    borderRadius : 4
  }

});
