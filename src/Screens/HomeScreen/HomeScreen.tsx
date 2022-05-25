import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image
} from 'react-native'



const HomeScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate('signIn');
  }


  return (
    <View style={styles.container}>

      <View style={{backgroundColor: 'white', height: '80%', marginTop: 180, borderRadius: 20,}}>

      <View style={{marginTop: 50, alignContent:'center', justifyContent:'center', }}>
      <Image
          source={require('../../../assets/walletlogo.png')}
          style={styles.image}
        />
      </View>     

       <View style={{  alignContent: 'center', justifyContent: 'center', }}>
        {/* <Text style={[styles.text, { marginBottom: 1, alignSelf: 'center', }]}>
          Seamless Potentials at your 
        </Text>
        <Text style={[styles.text, { marginBottom: 10, alignSelf: 'center', }]}>Fingertips!</Text> */}
        <Text style={styles.text}>Go Seamless!</Text>
      </View> 


      <Pressable style={styles.pressable} onPress={navigate}>
        <Text style={{ fontSize: 25, color: 'white', fontWeight: '600' }}>Start</Text>
      </Pressable>

      </View>


     

      
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    justifyContent: 'center',
    //alignContent: 'center',
    //alignSelf: 'center',
    backgroundColor: '#009688',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    color: '#009688', 
    fontFamily:'Nunito-Bold',
  },
  pressable: {
    borderWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: '#009688',
    marginHorizontal: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: 'white',
    marginTop: 25,
    fontFamily:'Nunito-Regular'
  },
  image:{
    height: 200,
    width: '100%',
    resizeMode:'cover',
    alignSelf:'center'

  },
  imageContainer:{
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  

  },
})

export default HomeScreen;