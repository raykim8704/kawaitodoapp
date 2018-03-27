import React from 'react';
import { StyleSheet,
  Text,
  View,StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView} from 'react-native';
import Todo from './Todo'
const {heigh,width} = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newTodo : ""
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Kawai To Do</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"NEW To Do"}
            value={this.state.newTodo}
            onChangeText={this._controlNewTodo}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
            ></TextInput>
          <ScrollView contentContainerStyle={styles.todos}>
            <Todo></Todo>
          </ScrollView>



        </View>
      </View>
    );
  }

  _controlNewTodo = text=>{
    this.setState({newTodo:text});
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',

  },
  title:{
    color:"white",
    fontSize:30,
    marginTop:70,
    fontWeight:"200"
  },
  card:{
    backgroundColor:"white",
    flex:1,
    width: width-25,
    marginBottom : 30,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    ...Platform.select({
      ios:{
        shadowColor:"rgb(50,50,50)",
        shadowOpacity:0.5,
        shadowRadius:5,
        shadowOffset:{
          height:-1,
          width:1
        }

      }
    })

  },
  input:{
    padding:30,
    borderBottomColor:"#bbb",
    borderBottomWidth: 1,
    fontSize:25,

  },
  todos :{
    alignItems :"center"
  }
});
