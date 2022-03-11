/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View} from 'react-native';
import stylesHeader from './styles';

const Header = () => {
  return (
    <View style={stylesHeader.containerHeader}>
      <Image
        source={require('../../assets/menu.png')}
        style={stylesHeader.menuHeaderImage}
      />
      <Text style={stylesHeader.titleHeader}>Movie App</Text>
      <Image
        source={require('../../assets/favorite.png')}
        style={stylesHeader.favoriteHeaderImage}
      />
    </View>
  );
};

export default Header;
