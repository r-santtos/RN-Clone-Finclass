import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import databaseApi from "../../database";

const FinBooks = () => {
  const api = databaseApi();

  const CardFinBooks = () => {
    return (
      <>
        {api.finbooks.map(({id, name, author, urlImg}) => (
          <TouchableOpacity 
            key={id} 
            style={{maxWidth: 125, marginHorizontal: 8}}
          >
            <ImageBackground
              style={styles.imgBackground}
              resizeMode={'cover'}
              source={{uri: urlImg}}
            ></ImageBackground>

            <View style={styles.boxShadow}>
              <Text style={[styles.txt, {fontSize: 16}]}>
                {name.length < 25
                ? `${name}`
                : `${name.substring(0, 25)}...`}
              </Text>
              <Text style={[styles.txt, {color: 'gray'}]}>{author}</Text>
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
      <CardFinBooks />
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

export default FinBooks;