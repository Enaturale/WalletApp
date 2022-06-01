import React from 'react';
import {View, Text, Pressable, Image, ScrollView} from 'react-native'
import styles from './Styles';

const Profile = () => {
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>
              Hi, Welcome
            </Text>

            <View style={{height: 200, width: 300, marginBottom: 30,}}>
                 <Image
                   source={{uri:'https://cdn.pixabay.com/photo/2018/08/25/21/08/money-3630935__340.png'}}
                   style={{height: '100%', width: 400, resizeMode:'contain', marginBottom: 30,}}
                /> 
            </View>

            <Pressable style={styles.pressable}>
                <Text style={styles.text}>
                    My Account Settings
                </Text>
            </Pressable>

            <Pressable  style={styles.pressable}>
                <Text style={styles.text}>
                    Withdraw Funds
                </Text>
            </Pressable>

            <Pressable style={styles.pressable} >
                <Text style={styles.text}>My Card and Bank Settings</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
                <Text style={styles.text}>Update your KYC!</Text>
            </Pressable>

            {/* <Pressable style={styles.pressable}>
                <Text style={styles.text}>Verify Your BVN</Text>
            </Pressable> */}

            <Pressable style={styles.pressable} >
                <Text style={styles.text}>FAQs</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
                <Text style={styles.text}>
                    Contact us
                </Text>
            </Pressable>

            <Pressable style={[styles.pressable]}>
                <Text style={[styles.text, {color: '#B80000', fontWeight:'700'}]}>
                    Sign Out
                </Text>
            </Pressable>          


        </ScrollView>
    )
}

export default Profile;