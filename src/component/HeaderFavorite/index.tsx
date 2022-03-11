/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View} from 'react-native';
import stylesHeader from './styles';

const HeaderFavorite = () => {
  return (
    <View style={stylesHeader.containerHeader}>
      <Image
        source={require('../../assets/back.png')}
        style={stylesHeader.menuHeaderImage}
      />
      <Text style={stylesHeader.titleHeader}>Favorite Movie</Text>
    </View>
  );
};

export default HeaderFavorite;
