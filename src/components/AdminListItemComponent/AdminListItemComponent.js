import React, {useState} from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { ListItem} from 'react-native-elements';

const AdminListItemComponent = () =>  {

  const userList = [
    {name:'Edgard Gamboa',
     date:'10/10/23'
    },
    {name:'Jorge Gamboa',
    date:'10/10/23'
    },
     {name:'Kenia Gamboa',
   date:'10/10/23'
    },
    {name:'Liam Gamboa',
  date:'10/10/23'
    },
    {name:'Liam Gamboa',
    date:'10/10/23'
    },
    {name:'Liam Gamboa',
    date:'10/10/23'
    },
    {name:'Liam Gamboa',
    date:'10/10/23'
    },
    {name:'Liam Gamboa',
    date:'10/10/23'
    },
    {name:'Liam Gamboa',
    date:'10/10/23'
    },
    {name:'Liam Gamboa',
    date:'10/10/23'
    }

  ]

  const userListMap = userList.slice(0, 3)

    return (
      
      <View style={styles.root}>
       {userListMap.map((user, i) => (
        <ListItem key={i} containerStyle={styles.listContainer} bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.text}>
            {user.name}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Content right>
          <ListItem.Title right style={styles.text}>
          {user.date}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
       ))}
      
      </View>
    );
}

const styles = StyleSheet.create({
  root:{
    width:'100%',
     marginTop:20,
      alignItems: 'center',
      marginBottom:25
  },
  listContainer:{
    marginTop:10,
    width:'90%',
    maxWidth:350,
    alignItems:'center',
    borderRadius:100,
    borderWidth:1,
    backgroundColor:'#4cd964',
    borderColor:'#4cd964'
  },
  text:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  }

})

export default AdminListItemComponent