import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'


const JoinTandaScreen = () => {
    const [code, setCode] = useState('')
    const navigation = useNavigation();


    const onConfirmedPressed = () =>{
        console.warn('Joining Tanda')
        // navigation.navigate('JoinTanda')
     

    }
    const onCreateNewTanda = () =>{
        console.warn('Joining Tanda')
        navigation.navigate('SignUpTandaSettingsScreen')
     

    }

 
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.root}>
       <Text style={styles.title}>Joining an existing Tanda? Enter join code</Text>

        <CustomInput placeholder={"Enter Code "} value={code} setValue={setCode}/>
       
        <CustomButton text="Join" onPress={onConfirmedPressed} type="PRIMARY" />

       
        <CustomButton text="Create a new Tanda" onPress={onCreateNewTanda} type= "SECONDARY" fgColor='#4CD964'/>
       
      </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding:20,
        backgroundColor:'white',
        height:'100%'
    },
    title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin:20
    },
    text:{
        marginVertical:10,
        width:'80%'

    }
})

export default JoinTandaScreen
