import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import databaseApi from "../../database";

const FinDocs = () => {
  const api = databaseApi();

  const CardFinDocs = () => {
    return (
      <>
        {api.findocs.map(({id, title, descriptions, urlImg}) => (
          <TouchableOpacity key={id} style={{maxWidth: 125, marginHorizontal: 8}}>
            <ImageBackground
              style={styles.imgBackground}
              resizeMode={'cover'}
              source={{uri: urlImg}}
            ></ImageBackground>

            <View style={styles.boxShadow}>
              <Text style={[styles.txt, {fontSize: 16}]}>{title}</Text>
              <Text style={[styles.txt, {color: 'gray'}]}>{descriptions}</Text>
            </View>
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
      <CardFinDocs />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: '#fff',
    fontWeight: '700',
  },
  imgBackground: {
    width: 125,
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  boxShadow: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 8,
  }
});

export default FinDocs;