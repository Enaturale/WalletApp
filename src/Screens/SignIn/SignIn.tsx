import React from 'react'
import { Text, 
      View, 
      TouchableOpacity, 
      TextInput, 
      KeyboardAvoidingView, 
      StyleSheet, 
      Pressable,
      Image } from 'react-native'



const SignIn = ({ navigation }) => {

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
            placeholder='  Email'
            //  value={}
            //  onChangeText={text =>}
            style={styles.input}
          />
          <TextInput
            placeholder='   Password'
            secureTextEntry
            //  value={}
            //  onChangeText={text =>}
            style={styles.input}
          />  

          <Text style={{fontSize: 23, marginBottom: 20, color: 'white',  }}>
            Forgot Password?
          </Text>        

          <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}>Log In</Text>
          </Pressable>

          <Text style={{fontSize: 25, marginTop: 20, color: 'white',  fontWeight:'bold'}}>
            Register
          </Text>

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
    backgroundColor: '#303F9F',
    borderRadius: 23,
  },
  input: {
    fontSize: 25,
    borderWidth: 2,
    width: '95%',
    marginBottom: 25,
    borderColor: '#3F51B5',
    color: '#303F9F',
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
    color: 'white',
    width: '93%',
  },
  pressableText:{
    color: '#303F9F',
    fontSize: 30,
    alignContent:'center',
    justifyContent:'center',
    fontWeight:'bold',
  },
  pressableContainer:{
    borderRadius: 10
  }

})

export default SignIn;