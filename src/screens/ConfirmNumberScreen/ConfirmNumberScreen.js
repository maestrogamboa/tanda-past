import React, { Component, useState } from 'react'
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView, onPress} from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignupButtons from '../../components/SocialButtons/SocialSingupButtons'
import { useNavigation } from '@react-navigation/native'


const ConfirmNumberScreen = ({route}) => {
    const [code, setCode] = useState('')
    const {signingStatus} = route.params;
    

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    
    const onConfirmedPressed = () =>{
        console.warn('Confirming Code')
        console.log(signingStatus)
        {signingStatus ? navigation.navigate('Dashboard')
    : navigation.navigate('JoinTanda')}
        

    }
    const onBackToSignInPressed = () =>{
        console.warn('Back to sign in')
        navigation.navigate('Signin')
     

    }
    const onPrivacyPressed = () => {
        console.warn('Privacy Pressed')
    }


    const onResendCodePressed = () => {
        console.warn("Resend Code")
    }
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.root}>
       <Text style={styles.title}>Confirm your number</Text>

        <CustomInput placeholder={"Code"} value={code} setValue={setCode}/>
       
        <CustomButton text="Confirm" onPress={onConfirmedPressed} type="PRIMARY" />

       
        <CustomButton text="Resend code" onPress={onResendCodePressed} type= "SECONDARY" fgColor='#4CD964'/>
        <CustomButton text="Back to Sign in" onPress={onBackToSignInPressed} type="TERTIARY"  />
       


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
    containerHorizontalFlex:{
        flexDirection: 'row',
        alignItems: 'center'

    },
    backButton:{
        width:'100%',
        alignSelf:'lef',
        marginLeft:10,
        marginBottom:30
    },
    text:{
        marginVertical:10,
        width:'80%'

    }
})

export default ConfirmNumberScreen
