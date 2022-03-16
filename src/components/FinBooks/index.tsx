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

/** COMPONENT FINBOOKS */
const FinBooks: React.FC = () => {
  const api = databaseApi();

  const Card = () => {
    return (
      <>
        {api.finbooks.map(({id, name, author, urlImg }) => (
          <TouchableOpacity key={id} style={styles.card}>
            <ImageBackground
              source={{ uri: urlImg }}
              resizeMode={'cover'}
              style={styles.imageBackground}
            >
            </ImageBackground>
            <View style={styles.boxShadow}>
              <Text style={[styles.txt, {color: '#43e4de'}]}>{author}</Text>
              <Text style={[styles.txt, {fontSize: 16}]}>{name}</Text>
              <Text style={[styles.txt, {color: 'gray'}]}>{author}</Text>
            </View>
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }
})

export default FinBooks; 