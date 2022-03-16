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

const FinClasses = () => {
  const api = databaseApi();

  const BackgroundImage = () => {
    return (
      <>
        {api.finclasses.map(({id, specialty, firstName, lastName, broker, urlImg}) => (
          <TouchableOpacity key={id}>
            <ImageBackground
              style={styles.imgBackground}
              resizeMode={'cover'}
              source={{uri: urlImg}}
            >
              <View style={styles.boxShadow}>
                <Text style={[styles.txt, {color: '#43e4de'}]}>{specialty}</Text>
                <Text style={[styles.txt, {fontSize: 16}]}>{firstName}{"\n"}{lastName}</Text>
                <Text style={[styles.txt, {color: 'gray'}]}>{broker}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </>
    );
  }

  return (
    <ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 8,
      }}
    >
      <BackgroundImage />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  imgBackground: {
    width: 125,
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 8
  },
  boxShadow: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 8,
  }
});

export default FinClasses;