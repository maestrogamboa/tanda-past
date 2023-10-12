import React, { Component } from 'react';
import { View, Text, StyleSheet, onPress} from 'react-native';
import { Card } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'



const GroupSettings = () => {
  const navigation = useNavigation();


  const onSettingsPressed = () =>{
    console.warn('Tanda Settings Screen')
    navigation.navigate('TandaSettings')
  }
    return (
        <View style={styles.root}>
        <Card containerStyle={styles.cardContainer} >
            <View style={styles.cardItems}>
            <Text style={styles.text_Primary}>Group{"\n"}Settings</Text>
            <Icon onPress={onSettingsPressed} size={40} style={styles.icon} name='settings' color='black'/>
            </View>
            
     </Card>
     </View>
    );
}

const styles = StyleSheet.create({
    root:{
      width:'100%',
      alignItems:'center',
      marginBottom:0
    },
    cardContainer:{
      width:'90%',
      maxWidth:350,
      maxHeight:170,
      marginTop:40,
      borderRadius:24,
      backgroundColor:'#4cd964',
      justifyContent:'space-around',
      flexDirection:'row'
    },
    text_Primary:{
      color:'white',
      fontSize:18,
      fontWeight:'bold'
    },
    cardItems:{
        width:"100%",
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around'
    },
    icon:{
      fontSize:'50px',
      paddingRight:30,
      paddingLeft:2
    },
    text_Secondary:{
      color:'white',
      fontSize:14
    }
    
  })

export default GroupSettings;
