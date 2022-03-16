import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native';

type StackDashboard = {navigation: {navigate:Function}}

/** COMPONENT DASHBOARD */
const Dashboard: React.FC<StackDashboard> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Dashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  txt: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000'
  },
})

export default Dashboard;