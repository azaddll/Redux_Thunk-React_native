import {View, Text, StyleSheet, TextInput , TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { setUserName , setUserAge } from '../redux/actions';
const LoginScreen = ({navigation}) => {


  const dispatch = useDispatch();

  const {name , age}  = useSelector(state => state.userReducer);

  const login = () =>{
    if(name == "" || name == null)
    {
      ToastAndroid.show('Enter your name' , 1000);
      return;
    }
    if(age == "" || age == null)
    {
      ToastAndroid.show('Enter your age' , 1000);
      return
    }
    
    navigation.navigate('homeScreen');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome!</Text>
      <TextInput onChangeText={(value)=>dispatch(setUserName(value))} placeholder="Enter your Name" style={styles.inputStyle} />
      <TextInput onChangeText={(value)=>dispatch(setUserAge(value))} placeholder="Enter your Age" style={styles.inputStyle} />
      <TouchableOpacity onPress={()=> login()} style={styles.loginButtonStyle}>
        <Text style={styles.buttonTextStyle}>Login</Text>
      </TouchableOpacity>                                       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  textStyle:{
    fontSize:40,
    fontWeight:'bold',
    fontStyle:'italic',
    marginBottom:10,
  },
  inputStyle:{
    borderWidth:1,
    borderColor:'gray',
    width:300,
    borderRadius:5,
    backgroundColor:'white',
    fontSize:19,
    marginVertical:5,
    textAlign:'center',
  },
  loginButtonStyle:{
    backgroundColor:'lime',
    width:100,
    height:30,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
  },
  buttonTextStyle:{
    fontSize:16,
    fontWeight:'bold'
  }
});

export default LoginScreen;
