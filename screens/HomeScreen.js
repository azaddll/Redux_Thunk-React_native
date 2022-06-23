import React from 'react';
import { useSelector } from 'react-redux/';

import {View, Text, Button , StyleSheet} from 'react-native';

const HomeScreen = () => {

  const userName = useSelector(state=> state.userReducer.name);
  const userAge = useSelector(state=> state.userReducer.age);
  

  return (
    <View style = {styles.container}>
      <Text>Welcome {userName}</Text>
        <Text>Your Age is:{userAge}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default HomeScreen;
