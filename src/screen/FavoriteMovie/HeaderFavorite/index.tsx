/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import stylesHeader from './styles';

interface typeNav {
  goBack: Function;
}

const HeaderFavorite = ({navigation}: {navigation: typeNav}) => {
  return (
    <View style={stylesHeader.containerHeader}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/back.png')}
          style={stylesHeader.menuHeaderImage}
        />
      </Pressable>
      <Text style={stylesHeader.titleHeader}>Favorite Movie</Text>
    </View>
  );
};

export default HeaderFavorite;
