import React from 'react';
import {View, Text, Pressable, Image} from 'react-native'
import styles from './Styles';

const Profile = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
              Hi, Welcome
            </Text>

            <View style={{height: 400, width: 400}}>
                 <Image
                   source={{uri:'https://cdn.pixabay.com/photo/2018/08/25/21/08/money-3630935__340.png'}}
                   style={{height: '100%', width: 400, resizeMode:'contain'}}
                /> 
            </View>

            <Pressable>
                <Text style={styles.text}>
                    My Account Settings
                </Text>
            </Pressable>

            <Pressable>
                <Text style={styles.text}>
                    Withdraw Funds
                </Text>
            </Pressable>

            <Pressable>
                <Text style={styles.text}>My Card and Bank Settings</Text>
            </Pressable>

            <Pressable>
                <Text style={styles.text}>Verify Your Email</Text>
            </Pressable>

            <Pressable>
                <Text style={styles.text}>Verify Your BVN</Text>
            </Pressable>

            <Pressable >
                <Text style={styles.text}>FAQs</Text>
            </Pressable>

            <Pressable>
                <Text style={styles.text}>
                    Contact us
                </Text>
            </Pressable>

            <Pressable>
                <Text style={styles.text}>
                    Sign Out
                </Text>
            </Pressable>

           


        </View>
    )
}

export default Profile;