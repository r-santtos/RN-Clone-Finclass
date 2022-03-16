import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import databaseApi from "../../database";

/** COMPONENT FINCLASSES */
const FinClasses: React.FC = () => {

  const api = databaseApi();

  const Card = () => {
    return (
      <>
        {api.finclasses.map(({id, specialty, name, broker, urlImg }) => (
          <TouchableOpacity key={id} style={styles.card}>
            <ImageBackground
              source={{ uri: urlImg }}
              resizeMode={'cover'}
              style={styles.imageBackground}
            >
              <View style={styles.boxShadow}>
                <Text style={[styles.txt, {color: '#43e4de', textAlign: 'center'}]}>{specialty}</Text>
                <Text style={[styles.txt, {fontSize: 16, textAlign: 'center'}]}>{name}</Text>
                <Text style={[styles.txt, {color: 'gray', textAlign: 'center'}]}>{broker}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </>
    )
  }

  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 8,
      }}
    >
      <Card />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
  },
  txt: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff'
  },
  card: {
    maxWidth: 125,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 8,
  },
  imageBackground: {
    width: 125,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  boxShadow: {
    width: '100%',
    minHeight: '33%',
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }
})

export default FinClasses; 