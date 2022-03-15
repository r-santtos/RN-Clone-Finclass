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
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#1b1b1e',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  txt: {
    fontWeight: '700',
    color: '#fff'
  },
})

export default Dashboard;