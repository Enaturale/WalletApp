import { Dimensions, StyleSheet, Platform } from "react-native";

const { width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    title:{
        fontSize: 20,
        fontWeight:'bold',
    },
    description:{
        fontSize: 18,
    },

    item:{
        width: '100%',
        height: screenWidth - 80
    },
    imageContainer:{
        flex: 1,
        borderRadius: 5,
        backgroundColor: '#e3e3e3',
        marginBottom: Platform.select({ios:0, android:1}),
    },
    image:{
        ...StyleSheet.absoluteFillObject,
        resizeMode:'contain',
    },
    dotContainer:{
       // backgroundColor:'#D9D9D9',
    },
    dotStyle:{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor:'black',
    },
    inactiveDotStyle:{
        backgroundColor:'#969696',
    },
});

export default styles;