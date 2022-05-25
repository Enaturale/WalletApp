import React, {useState} from 'react'
import { useEffect } from 'react';
import { Text, 
      View, 
      TouchableOpacity, 
      TextInput, 
      KeyboardAvoidingView, 
      StyleSheet, 
      Pressable,
      Image } from 'react-native'
import { auth } from '../../../firebse';



const SignIn = ({ navigation }) => {
  
  const navigate = () => {
    navigation.navigate('register');
  }

  const gotoDashboard =() =>{
    navigation.navigate('Dashboard');
  }

  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  //if the user is logged in
  useEffect(()=> {
   const unsubscribe = auth.onAuthStateChanged(user => {
      if (user){
        navigation.navigate('Dashboard');
      }

    })
    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email.trim(), password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      alert('User created successfully. You registered with ' + user.email);
      navigation.navigate('Dashboard')
    })
    .catch((error: { message: any; }) => alert(error.message) )
  }

  const handleSignIn = () => {
    auth
    .signInWithEmailAndPassword(email.trim(), password)
    .then((userCredentials: { user: any; }) => {
      const user = userCredentials.user;
     alert('Welcome back ' + user.email);
      navigation.navigate('Dashboard')
    })
    .catch((error: { message: any; }) => alert(error.message) )

  }


  return (
    <KeyboardAvoidingView>
      <View style={{marginTop: 20, alignContent:'center', justifyContent:'center'}}>
      <Image
          source={require('../../../assets/walletlogo.png')}
          style={styles.image}
        />
      </View>
      
      <View style={styles.container}>
      
        <View style={{justifyContent: 'center', alignItems:'center', marginTop: 50,}}>
          <TextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
          />  

          <Text style={{fontSize: 23, marginBottom: 20, color: 'white',  }}>
            Forgot Password?
          </Text>        

          <Pressable style={styles.pressable} onPress={handleSignIn}>
            <Text style={styles.pressableText}>Log In</Text>
          </Pressable>

          <Pressable onPress={handleSignUp} style={styles.pressableOutline}>
          <Text style={{fontSize: 25, marginTop: 9, color: 'white',  fontWeight:'bold'}}>
            Register
          </Text>
          </Pressable>

        </View>


      </View>

    </KeyboardAvoidingView>


  )

}

const styles = StyleSheet.create({
  image:{
    height: 200,
    width: '100%',
    resizeMode:'cover',
    alignSelf:'center'

  },
  container: {
    // justifyContent: 'center',
    // alignItems:'center',
    marginTop: 0,
    height: 800,
    backgroundColor: '#009688',
    borderRadius: 23,
  },
  input: {
    fontSize: 25,
    borderWidth: 2,
    width: '95%',
    marginBottom: 25,
    borderColor: '#90A4AE',
    color: '#009688',
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: 'white'

  },
  pressable: {
    borderWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: 'white',
    marginHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: 'black',
    width: '80%',
  },
  pressableOutline:{
    borderColor: 'white',
    height: 50,
    borderWidth: 2,
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    fontFamily: 'Nunito-Regular'
  },
  pressableText:{
    color: '#009688',
    fontSize: 30,
    alignContent:'center',
    justifyContent:'center',
    fontWeight:'bold',
    fontFamily: 'Nunito-Bold'
  },
  pressableContainer:{
    borderRadius: 10
  }

})

export default SignIn;