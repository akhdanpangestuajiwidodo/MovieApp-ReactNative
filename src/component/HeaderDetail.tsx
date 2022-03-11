/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';

const HeaderDetail = () => {
  return (
    <View style={stylesHeader.containerHeader}>
      <TouchableHighlight style={stylesHeader.backButton} underlayColor="#ccc">
        <Image
          source={require('../../assets/back.png')}
          style={stylesHeader.menuHeaderImage}
        />
      </TouchableHighlight>
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
  backButton: {
    borderRadius: 50 / 2,
    width: 38,
    height: 38,
    backgroundColor: '#322A5Ec0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingEnd: 2,
  },
  menuHeaderImage: {width: 23, height: 23},
  titleHeader: {color: '#FDFEFF', fontWeight: '700', fontSize: 14},
  favoriteHeaderImage: {width: 23, height: 23},
});

export default HeaderDetail;
