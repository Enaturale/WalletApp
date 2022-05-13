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
      <View style={{marginTop: 20, alignContent:'center', justifyContent:'center'}}>
      <Image
          source={require('../../../assets/walletlogo.png')}
          style={styles.image}
        />
      </View>

      <View style={{  alignContent: 'center', justifyContent: 'center', }}>
        <Text style={[styles.text, { marginBottom: 1, alignSelf: 'center', }]}>
          Seamless Potentials at your 
        </Text>
        <Text style={[styles.text, { marginBottom: 10, alignSelf: 'center', }]}>Fingertips!</Text>
        <Text style={styles.text}>Ready to Begin?</Text>
      </View>


      <Pressable style={styles.pressable} onPress={navigate}>
        <Text style={{ fontSize: 23, color: 'white', fontWeight: '500' }}>Start</Text>
      </Pressable>
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
    backgroundColor: 'white',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pressable: {
    borderWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: '#3F51B5',
    marginHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: 'white'
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