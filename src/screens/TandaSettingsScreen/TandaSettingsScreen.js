import React, { Component, useState } from 'react'
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView, onPress} from 'react-native'
import tandaLogo from "../../../assets/tandaLogo.png"
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignupButtons from '../../components/SocialButtons/SocialSingupButtons'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'


const TandaSettingsScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    
    const onSignInPressed = () =>{
        const signingStatus = false
        console.warn('Sign in')
        navigation.navigate('ConfirmNumber', {signingStatus: signingStatus})
     

    }
    const onTermsPressed = () =>{
        console.warn('Terms Pressed')
     

    }
    const onPrivacyPressed = () => {
        console.warn('Privacy Pressed')
    }


    const onGoBack = () => {
        console.warn("Dashboard")
        navigation.navigate('Dashboard')
    }
    return (
        <ScrollView  style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.root}>
  
            <Icon size={20} containerStyle={styles.icon} type='ionicon' name='arrow-back-outline' color='black' onPress={onGoBack}/>


        <View style={styles.containerHorizontalFlex}>
           
        <Text style={styles.title}>Add new participant</Text>
        </View>

        
        <CustomInput placeholder={"First Name"} value={firstName} setValue={setFirstName}/>
        <CustomInput placeholder={"Last Name"} value={lastName} setValue={setLastName}/>
        <CustomInput placeholder={"Phone Number"} value={phoneNumber} setValue={setPhoneNumber}/>
        <CustomInput placeholder={"Date of payout"} value={phoneNumber} setValue={setPhoneNumber}/>

        <CustomButton text="Add Participant" onPress={onSignInPressed} type="PRIMARY" />

      </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding:20,
        backgroundColor:'white',
        height:'100%',
        
    },
    title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin:20,
    alignItems:'center'
    },
    containerHorizontalFlex:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        maxWidth:350

    },
    horizontalDividers:{
        backgroundColor: 'gray',
        height: 1,
        width: 130
    },
    dividerText:{
        fontSize: 12,
        paddingHorizontal: 5,
        alignSelf: 'center',
        color: 'gray'
    },

    icon:{
       width:'100%',
       maxWidth:350,
       alignContent:'flex-end',
       justifyContent:'flex-start',
       marginTop:30,
       marginRight:'90%'
    }
})

export default TandaSettingsScreen
