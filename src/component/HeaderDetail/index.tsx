/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableHighlight, View} from 'react-native';
import stylesHeader from './styles';

const HeaderDetail = () => {
  const navigation = useNavigation();
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
