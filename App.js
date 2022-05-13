import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import Register from './src/Screens/Register/Register';
import SignIn from './src/Screens/SignIn/SignIn';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler'

const Stack = createStackNavigator();


const App = () => {

  return(
   <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component ={HomeScreen} options={{headerShown:false}}/>       
       <Stack.Screen name="signIn" component ={SignIn} options={{headerShown:false}}/>
       <Stack.Screen name="Register" component ={Register} />
    </Stack.Navigator>      
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});

export default App;