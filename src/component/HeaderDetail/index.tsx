/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, TouchableHighlight, View} from 'react-native';
import stylesHeader from './styles';

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

export default HeaderDetail;
