import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import DropDown from '../../components/DropDown'
import AvatarComponent from '../../components/AvatarComponent'
import CardComponent from '../../components/CardComponent'
import ListItemComponent from '../../components/ListItemComponent'
import CustomButton from '../../components/CustomButton'
import GroupSettings from '../../components/GroupSettings'
import InviteCode from '../../components/InviteCode'
import AdminListItemComponent from '../../components/AdminListItemComponent'
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'



const DashboardScreen = () =>  {
    const admin = true;
    const navigation = useNavigation();

    const onAddParticipantPress = () => {
        console.warn('Add Participants Screen')
        navigation.navigate('AddParticipants')
    }
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.root}>
        <View style={styles.headerContainer}>
            <DropDown/>
            <AvatarComponent/>
        </View>
        <View style={{width:'100%', maxWidth: 360, alignContent:'center', flexDirection:'column'}}>
            <View  style={styles.headerContainerList}>
            <Text style={styles.text}>Add Participants</Text>
            <CustomButton text="View All" type= "SECONDARY_XSMALL" fgColor='#030303'/>
            </View>
            <View style={styles.iconContainerList}>
            <Avatar onPress={onAddParticipantPress} size='medium' containerStyle={{backgroundColor:'#4CD964'}} rounded icon={{ name: 'person-add-outline', type:'ionicon' }} /> 
            </View>
        </View>
        <CardComponent/>
        {admin &&(
            <>
         <GroupSettings/>
         <InviteCode/>
         </>)}
        <View style={styles.headerContainerList}>
           {admin ? ( <>
            <Text style={styles.text}>Next Up</Text> 
            <CustomButton text="View All" type= "SECONDARY_SMALL" fgColor='#030303'/>
           </> ) :  <Text style={styles.text}>Next Up</Text> }
        </View>
        
        { admin ? <AdminListItemComponent/> : <ListItemComponent/>}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        backgroundColor:'white',
        height:'100%',
        marginTop:20,
        alignContent:'center'
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:30,
        position:'sticky',
        zIndex: 1,
        top:0
    },
    text:{
        fontWeight:'bold',
        fontSize:18
    },
    headerContainerList:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:30,
        marginBottom:5
    },
    iconContainerList:{
        width:'100%',
        maxWidth:360,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:1,
        marginBottom:5,
        flexWrap:'wrap',
        marginHorizontal:40
    }
})

export default DashboardScreen