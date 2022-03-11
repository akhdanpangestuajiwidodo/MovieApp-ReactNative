/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const HeaderDetail = () => {
  return (
    <View style={stylesHeader.containerHeader}>
      <Image
        source={require('../../assets/back.png')}
        style={stylesHeader.menuHeaderImage}
      />
      <Image
        source={require('../../assets/favorite.png')}
        style={stylesHeader.favoriteHeaderImage}
      />
    </View>
  );
};

const stylesHeader = StyleSheet.create({
  containerHeader: {
    marginTop: 10,
    marginBottom: '40%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  menuHeaderImage: {width: 23, height: 23},
  titleHeader: {color: '#FDFEFF', fontWeight: '700', fontSize: 14},
  favoriteHeaderImage: {width: 23, height: 23},
});

export default HeaderDetail;
