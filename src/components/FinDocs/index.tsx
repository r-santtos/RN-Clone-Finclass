import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import databaseApi from "../../database";

/** COMPONENT FINDOCS */
const FinDocs: React.FC = () => {
  const api = databaseApi();

  const Card = () => {
    return (
      <>
        {api.findocs.map(({id, title, descriptions, urlImg }) => (
          <TouchableOpacity key={id} style={styles.card}>
            <ImageBackground
              source={{ uri: urlImg }}
              resizeMode={'cover'}
              style={styles.imageBackground}
            >
            </ImageBackground>

            <View style={styles.boxShadow}>
              <Text style={[styles.txt, {fontSize: 16}]}>{title}</Text>
              <Text style={[styles.txt, {color: 'gray'}]}>{descriptions}</Text>
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

export default FinDocs; 