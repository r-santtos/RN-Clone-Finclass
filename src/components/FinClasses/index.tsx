import React from "react";
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const FinClasses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>FinClasses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#fff',
    fontWeight: '700'
  }
});

export default FinClasses;