import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CustomSlider from '../../Components/CustomSlider';
import data from './data';




const Dashboard = ({navigation}) => {
    const gotoProfile=() =>{
        navigation.navigate('Profile');
      }
    return(
       
        <View style={{ backgroundColor: 'white', height: '100%'}}>
            <CustomSlider data={data} />

            {/* Update Profile */}
            <View>
                
                    <Pressable style={styles.pressable} onPress={gotoProfile}>
                        <Text style={styles.pressableText} >Update your Profile!</Text>
                    </Pressable>
                
            </View>

            {/* Transactions */}
            <View style={styles.recentContainer} >
                <View>
                    <Text style={styles.recentText} >Recent Activities</Text>
               </View>

               <View>                 

               </View>
            </View>
        </View>  

       
           
           
         
    )
}

const styles = StyleSheet.create({
    pressable: {

    },
    pressableText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        
    },
    recentText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,

    },
    recentContainer:{
         backgroundColor: '#0693E3',
         height: '40%',
         marginTop: 20,
         borderRadius: 20,         
        marginHorizontal: 15,
    }
})

export default Dashboard;