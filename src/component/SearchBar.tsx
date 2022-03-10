/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SectionStyle}>
        <Image
          source={require('../../assets/search_white.png')}
          style={styles.ImageStyle}
        />

        <TextInput
          style={styles.input}
          placeholder="Search Movie"
          underlineColorAndroid="transparent"
          placeholderTextColor="white"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: '#525A62',
    borderWidth: 0,
    fontSize: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#525A62',
    // borderWidth: 0.5,
    // borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
    color: 'grey',
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default SearchBar;
