import React,{useState} from 'react'
import { Text, StyleSheet, View, TextInput,} from 'react-native'

const CustomMessageInput = ({value, setValue, placeholder, type}) => {
  const [isFocused, setIsFocused] = useState(false);
  console.log(isFocused)

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


    return (
      <View style={styles.container}>
        <TextInput
         style={[styles.inputStyle, isFocused && styles.inputFocused]}
         value={value}
         onFocus={handleFocus}
         onBlur={handleBlur}
         textAlignVertical='top'
         multiline={true}
         onChangeText={setValue} 
         placeholder={placeholder}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop:10,
    },
    container_SECONDARY:{
      backgroundColor:'#F0F0F0'
    },
    inputStyle: {
      width:'100%',
      maxWidth:325,
      height: 80,
      borderWidth: 1,
      backgroundColor:'#F0F0F0',
      borderRadius: 5,
      paddingHorizontal: 5,
      paddingVertical:5
    },
    inputFocused: {
      backgroundColor: 'white',
      borderRadius: 5,
     
    },
})

export default CustomMessageInput;

