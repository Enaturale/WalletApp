import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    savingsContainer:{
        //height: '40%',
        backgroundColor:'#009688',
        height: 200,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 20,
        
    },
    savingsText:{
        fontSize: 23,
        fontWeight: '600',
        color: 'white',
        marginHorizontal: 10,
        marginVertical: 10,   
        fontFamily: 'Nunito-Black',    
             

    },
    addCard:{
        alignItems:'center',
        justifyContent:'center',
        color:'white',  
        fontWeight:'bold',
        fontSize: 19,  
        fontFamily: 'Nunito-Light',    


    },
    cardContainer:{
        marginTop: 20,
        alignSelf:'center',
        justifyContent:'center',
        flexDirection:'row',
        
    }

});

export default Styles;