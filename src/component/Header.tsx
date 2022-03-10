/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

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

const stylesHeader = StyleSheet.create({
  containerHeader: {
    marginBottom: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  menuHeaderImage: {width: 23, height: 23, transform: [{scaleX: -1}]},
  titleHeader: {color: '#FDFEFF', fontWeight: '700', fontSize: 14},
  favoriteHeaderImage: {width: 23, height: 23},
});

export default Header;
