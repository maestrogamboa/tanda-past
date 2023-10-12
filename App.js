import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import ConfirmNumberScreen from './src/screens/ConfirmNumberScreen';
import Navigation from './src/navigation/index.js';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
     <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'white',
    height:'100%'
  },
});
