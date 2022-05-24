import { Dimensions, StyleSheet, Platform } from "react-native";

const { width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color:'white', 
        marginLeft: 20,
        marginVertical: 10,
           
    },
    description:{
        fontSize: 18,
        color:'white',
        marginLeft: 30,
    },
    item:{
        width: '100%',
        height: screenWidth - 290,
        backgroundColor: '#009688',
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        borderRadius: 20,
    },
    imageContainer:{
        flex: 3,
        borderRadius: 5,
        //backgroundColor: '#e3e3e3',
        marginBottom: Platform.select({ios:0, android:1}),
        marginTop: 10,
        marginLeft: 30,
    },
    image:{
        // ...StyleSheet.absoluteFillObject,
        resizeMode:'contain',
        height: '30%',
    },
    dotContainer:{
       // backgroundColor:'#D9D9D9',
    },
    dotStyle:{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor:'#004D40',
    },
    inactiveDotStyle:{
        backgroundColor:'#009688',
    },
});

export default styles;