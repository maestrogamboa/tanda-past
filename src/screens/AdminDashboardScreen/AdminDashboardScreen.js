import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import DropDown from '../../components/DropDown'
import AvatarComponent from '../../components/AvatarComponent'
import CardComponent from '../../components/CardComponent'
import ListItemComponent from '../../components/ListItemComponent'
import CustomButton from '../../components/CustomButton'


const AdminDashboardScreen = () =>  {
    const admin = true;
    return (
        
        <View style={styles.root}>
        <View style={styles.headerContainer}>
            <DropDown/>
            <AvatarComponent/>
        </View>
        <CardComponent/>
        <View style={styles.headerContainerList}>
           <Text style={styles.text}>Next Up</Text>
           {/* <CustomButton text="Edit List" type= "SECONDARY_SMALL" fgColor='#4CD964'/> */}
        </View>
        
        <ListItemComponent/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        backgroundColor:'white',
        height:'100%',
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:30,
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
})

export default AdminDashboardScreen