import React, { Component, useState } from 'react'
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView, onPress, TouchableOpacity} from 'react-native'
import tandaLogo from "../../../assets/tandaLogo.png"
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignupButtons from '../../components/SocialButtons/SocialSingupButtons'
import { useNavigation } from '@react-navigation/native'
import { Icon, CheckBox } from 'react-native-elements'
import CustomMessageInput from '../../components/CustomMessageInput'


const SignUpTandaSettingsScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [paymentReminderMessage, setPaymentReminderMessage] = useState('')
    const [receiverReminderMessage, setReceiverReminderMessage] = useState('')
    const [checkedIndex, setCheckedIndex] = useState(null);
    const [isInputFocused, setInputFocused] = useState(false);

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const handleInputFocus = () => {
        setInputFocused(true);
      };
    
    const onSignInPressed = () =>{
        const signingStatus = false
        console.warn('Sign in')
        navigation.navigate('ConfirmNumber', {signingStatus: signingStatus})
     

    }
    const onTermsPressed = () =>{
        console.warn('Terms Pressed')
     

    }
    const onChecked = (index) => {
        if (index === checkedIndex) {
            setCheckedIndex(null);
          } else {
            setCheckedIndex(index);
          }
    }


    const onGoBack = () => {
        console.warn("Dashboard")
        navigation.navigate('Dashboard')
    }
    return (
        <ScrollView  style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.root}>
            <Icon size={20} containerStyle={styles.icon} type='ionicon' name='arrow-back-outline' color='black' onPress={onGoBack}/>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Tell us more about your Tanda! </Text>
        </View>
        <View style={styles.inputContainers}>
            <Text style={styles.text}>Date the tanda starts (Date of first Payment)</Text>
        <CustomInput placeholder={"First Name"} value={firstName} setValue={setFirstName}/>    
        </View>
        <View style={styles.inputContainers}>
        <Text style={styles.text}>Amount to be collected per person</Text>
        <CustomInput placeholder={"First Name"} value={firstName} setValue={setFirstName}/>    
        </View>
        <View style={styles.inputContainers}>
        <Text style={styles.text}>Set payment frequency</Text>
        <View  style={styles.containerHorizontalFlex}>
            <Text>Weekly</Text>
        <CheckBox
            uncheckedColor='#4CD964'
            checkedColor='#4CD964'
            right
            checkedIcon='toggle-on'
            uncheckedIcon='toggle-off'
            checked={checkedIndex === 0}
            onPress={() => onChecked(0)}
            />
        </View>
        <View  style={styles.containerHorizontalFlex}>
            <Text>Bi-weekly</Text>
        <CheckBox
            uncheckedColor='#4CD964'
            checkedColor='#4CD964'
            right
            checkedIcon='toggle-on'
            uncheckedIcon='toggle-off'
            checked={checkedIndex === 1}
            onPress={() => onChecked(1)}
            />
        </View>
        <View  style={styles.containerHorizontalFlex}>
            <Text>Monthly</Text>
        <CheckBox
            uncheckedColor='#4CD964'
            checkedColor='#4CD964'
            right
            checkedIcon='toggle-on'
            uncheckedIcon='toggle-off'
            checked={checkedIndex === 2}
            onPress={() => onChecked(2)}
            />
        </View>
        
        </View>
        <View style={styles.inputContainers}>
            <Text style={styles.text}>Amount to be collected per person</Text>
        <CustomMessageInput placeholder={""} value={paymentReminderMessage} setValue={setPaymentReminderMessage} type='SECONDARY'/>    
        </View>
        <View style={styles.inputContainers}>
            <Text style={styles.text}>Customized receiver remainder Message</Text>
        <CustomMessageInput placeholder={""} value={receiverReminderMessage} setValue={setReceiverReminderMessage} type='SECONDARY'/>    
        </View>
        
         
        <CustomButton text="Save" onPress={onSignInPressed} type="PRIMARY" />

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
        justifyContent:'space-around',
        maxWidth:350

    },
    titleContainer:{
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
    },
    inputContainers:{
        width:'100%',
        alignContent:'center',
        marginVertical:20
    },
    text:{
        fontSize:14,
        fontWeight:'bold',
        textAlign:'left'
    }
})

export default SignUpTandaSettingsScreen
