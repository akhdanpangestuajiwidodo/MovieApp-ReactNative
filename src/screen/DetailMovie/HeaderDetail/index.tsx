/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, TouchableHighlight, View} from 'react-native';
import stylesHeader from './styles';

interface typeNav {
  goBack: Function;
}

const HeaderDetail = ({navigation}: {navigation: typeNav}) => {
  return (
    <View style={stylesHeader.containerHeader}>
      <TouchableHighlight
        style={stylesHeader.backButton}
        underlayColor="#ccc"
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/back.png')}
          style={stylesHeader.menuHeaderImage}
        />
      </TouchableHighlight>
    </View>
  );
};

export default HeaderDetail;
