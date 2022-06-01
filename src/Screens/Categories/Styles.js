import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    savingsContainer:{
        //height: '40%',
        backgroundColor:'#1B4E89',
        height: 200,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 20,
        
    },
    savingsText:{
        fontSize: 25,
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
        fontSize: 20,  
        fontFamily: 'Nunito-Bold',    

    },
    cardContainer:{
        marginTop: 25,
        alignSelf:'center',
        justifyContent:'center',
        flexDirection:'row'       
        
    },
    input:{
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        borderColor:'#1B4E89',
        marginVertical: 10,
    },
    inputShort:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'#1B4E89'
    }, 
    pressable:{
        backgroundColor:'#1B4E89',
        height: 40,
        width: 100,
        alignContent: 'center',
        justifyContent:'center',
        borderRadius:10,
        

    },
    pressableOutline:{
        backgroundColor:'white',
        height: 40,
        width: 100,
        alignContent: 'center',
        justifyContent:'center',
        borderRadius:10,
        borderColor:'#1B4E89',
        borderWidth: 1,
        marginHorizontal:15,
        

    },
    pressableText:{
        color:'white',
        fontSize: 22,
        fontFamily:'Nunito-Bold',
        alignContent: 'center',
        justifyContent:'center',
        marginLeft: 22,      
        

    },
    pressableTextOutline:{
        color:'#1B4E89',
        fontSize: 22,
        fontFamily:'Nunito-Bold',
        alignContent: 'center',
        justifyContent:'center',
        marginLeft: 22,      
        

    },
    investExplore:{
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'PlayfairDisplay-Regular',
        fontWeight: '700',
    }

});

export default Styles;