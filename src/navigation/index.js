import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ConfirmNumberScreen from '../screens/ConfirmNumberScreen';
import JoinTandaScreen from '../screens/JointTandaScreen/JoinTandaScreen';
import DashboardScreen from '../screens/DashboardScreen';
import GroupSettings from '../components/GroupSettings';
import AddParticipantScreen from '../screens/AddParticipantScreen';
import TandaSettingsScreen from '../screens/TandaSettingsScreen';
import SignUpTandaSettingsScreen from '../screens/SignUpTandaSettingsScreen';

const Stack = createNativeStackNavigator()

const Navigation = () => {
  
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Signin' component={SigninScreen}/>
            <Stack.Screen name='Signup' component={SignupScreen}/>
            <Stack.Screen name='ConfirmNumber' component={ConfirmNumberScreen}/>
            <Stack.Screen name='JoinTanda' component={JoinTandaScreen}/>
            <Stack.Screen name='Dashboard' component={DashboardScreen}/>
            <Stack.Screen name='AddParticipants' component={AddParticipantScreen}/>
            <Stack.Screen name='TandaSettings' component={TandaSettingsScreen}/>
            <Stack.Screen name='SignUpTandaSettingsScreen' component={SignUpTandaSettingsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    )  
}

export default Navigation
