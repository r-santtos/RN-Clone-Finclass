import React from "react";
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const FinBooks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>FinBooks</Text>
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

export default FinBooks;