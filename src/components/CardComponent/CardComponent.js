import React, {useState} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Card } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import CustomButton from '../CustomButton';
import ListItemComponent from '../ListItemComponent';

const CardComponent = () =>  {
    return (
      <View style={styles.root}>
         <Card containerStyle={styles.cardContainer} >
          <View style={styles.cardItems}>
          <Icon size={40} style={styles.icon} name='notifications' color='white'/>
          <View>
          <Text style={styles.text_Primary} >Set up Notifications</Text>
          <Text style={styles.text_Secondary} >Never miss a payment</Text>
          </View>
          
          </View>
          <View style={{alignSelf:'center', paddingTop:30}}>
            <CustomButton text="Notifications " type= "SECONDARY" fgColor='#030303'/>
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
    alignItems:'center'
  },
  text_Primary:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  cardItems:{
    flexDirection:'row',
    alignItems:'center'
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

export default CardComponent