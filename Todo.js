import React,{Component} from "react";
import {View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";


const {width,height} = Dimensions.get("window");
export default class Todo extends Component{
  constructor(props){
    super(props);
    this.state = {
      isEditing : false,
      isCompleted : false
    };
  }
  render(){
    const {isEditing,isCompleted} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this._toggleComplete}>
            <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]}/>
          </TouchableOpacity>
      <Text style={[styles.text ,
isCompleted ? styles.completedText : styles.uncompletedText]}>Im Todo Component </Text>
      </View>

      {isEditing ?(
        <View style={styles.actions}>
        <TouchableOpacity onPressOut={this._finishEditing}>
        <View style={styles.actionContainer}>
        <Text style={styles.actionText}>✅</Text>
        </View>
        </TouchableOpacity>
        </View> ):(
        <View style={styles.actions}>
        <TouchableOpacity onPressOut={this._startEditing}>
        <View style={styles.actionContainer}>
        <Text style={styles.actionText}>✏️</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.actionContainer}>
        <Text style={styles.actionText}>❌</Text>
        </View>
        </TouchableOpacity>
        </View>)}

      </View>
    );
  }
  _toggleComplete = () =>{
    this.setState(prevState =>{
      return {
        isCompleted : !prevState.isCompleted
      }
    })
  };

  _startEditing = () => {
    this.setState({
      isEditing : true
    });
  }
  _finishEditing = () => {
    this.setState({
      isEditing : false
    });
  }

}

const styles = StyleSheet.create({
  container : {
    width:width - 50,
    borderBottomColor : "#bbb",
    borderBottomWidth : StyleSheet.hairlineWidth,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between"

  },
  text : {
    fontWeight : "600",
    fontSize : 20,
    marginVertical : 20
  },
  completedText:{
    color:"#bbb",
    textDecorationLine :"line-through"
  },
  uncompletedText:{
    color : "#353839"
  },
  circle : {
    width : 30,
    height : 30,
    borderRadius : 15,
    borderWidth : 3,
    marginRight : 20
  },
  completedCircle:{
    borderColor : "#bbb"
  },
  uncompletedCircle : {
    borderColor : "#F23657"
  },
  column:{
    flexDirection : "row",
    alignItems : "center",
    width : width /2,
    justifyContent :"space-between"
  },
  actions:{
    flexDirection : "row",
  },
  actionContainer : {
    marginVertical : 10,
    marginHorizontal : 10
  }

});
