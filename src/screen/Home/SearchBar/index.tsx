/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, TextInput, View} from 'react-native';
import styles from './styles';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SectionStyle}>
        <Image
          source={require('../../../assets/search.png')}
          style={styles.ImageStyle}
        />

        <TextInput
          style={styles.input}
          placeholder="Search Movie"
          underlineColorAndroid="transparent"
          placeholderTextColor="#525A62"
        />
      </View>
    </View>
  );
};

export default SearchBar;
