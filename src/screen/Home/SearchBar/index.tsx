/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import styles from './styles';

const SearchBar = () => {
  const {theme} = useSelector((state: RootState) => state.themeReducer);
  return (
    <View style={styles.container}>
      {theme === 'light' ? (
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
      ) : (
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../../assets/search_white.png')}
            style={styles.ImageStyle}
          />

          <TextInput
            style={styles.input}
            placeholder="Search Movie"
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
          />
        </View>
      )}
    </View>
  );
};

export default SearchBar;
