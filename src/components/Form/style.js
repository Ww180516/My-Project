import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#ff4300",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,    
    },  
    form:{
        width:"100%",
        alignItems:"center",
        height:"auto",
        marginTop:30,
        padding:10,
    },
    formLabel:{
        color:"#000000",
        fontSize:25,
        fontWeight:"bold",
        paddingLeft:10,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:18,           
    },
    buttonPlay:{
        borderRadius:18,
        alignItems:"center",
        justifyContent:"center",
        width:"200%",
        backgroundColor:"#ff8c00",
        paddingTop:20,
        paddingBottom:20,
        marginLeft:30,
        margin:30,
    },
    buttonInit:{
        fontSize:20,
        alignItems:"center",    
        color:"#000000"        
    },
    Bonequinho:{
        width:100,
        height:100,
    }

});

export default styles