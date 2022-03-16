import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  StatusBar
} from 'react-native';

/** COMPONENT FINCLASSES */
const FinClasses: React.FC = () => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }}
    >
      <View>
        <Text style={styles.txt}>Fin Books</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  txt: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff'
  },
})

export default FinClasses; 