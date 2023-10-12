import React, { Component } from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

const CustomButton = ({onPress, text, type, fgColor}) => {

    return (
      <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.text, styles[`text_${type}`], fgColor && {color:fgColor}]}> {text} </Text>
      </Pressable>
    )
  
}

const styles = StyleSheet.create({
    container:{
        width:'100%',

        padding:15,
        marginVertical:15,

        alignItems: 'center',
        borderRadius:20
    },

    container_PRIMARY:{
        backgroundColor:'#4CD964'
    },
    container_TERTIARY:{
        width: '100%'
    },
    container_CUSTOM:{
        backgroundColor:'white',
        width:'40%',
        paddingVertical:15,
        marginHorizontal:15,
        borderColor:'#030303',
        borderWidth: 1
        
    },
    container_SECONDARY:{
        backgroundColor:'white',
        paddingVertical:15,
        marginHorizontal:15,
        marginVertical:5,
        borderColor:'#4CD964',
        borderWidth: 1
        
    },
    container_SECONDARY_SMALL:{
        marginVertical:0,
        backgroundColor:'white',
        borderColor:'#4CD964',
        borderWidth: 1,
        width:100
        
    },
    container_SECONDARY_XSMALL:{
        alignSelf:'flex-start',
        backgroundColor:'white',
        borderColor:'#4CD964',
        borderWidth: 1,
        maxWidth:100,
        padding:5,
    
        
    },
    container_CUSTOMSIGNUP:{
        backgroundColor:'white',
        width:'100%',
        paddingVertical:15,
        marginHorizontal:10,
        marginVertical:10,
        borderColor:'#030303',
        borderWidth: 1
        
    },
    container_CUSTOMNOTIFACATIONS:{
        backgroundColor:'white',
        width:'60%',
        paddingVertical:15,
        marginHorizontal:10,
        marginVertical:10,
        borderColor:'#030303',
        borderWidth: 1,
        alignSelf:'center'
    },

    text:{
        fontWeight:'bold',
        
    },
    text_PRIMARY:{
        color:'black'
    },
    text_TERTIARY:{
        color:'gray'
    }
    

})
export default CustomButton;
