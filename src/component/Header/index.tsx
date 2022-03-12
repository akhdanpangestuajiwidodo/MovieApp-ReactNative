/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import stylesHeader from './styles';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={stylesHeader.containerHeader}>
      <Image
        source={require('../../assets/menu.png')}
        style={stylesHeader.menuHeaderImage}
      />
      <Text style={stylesHeader.titleHeader}>Movie App</Text>
      <Pressable onPress={() => navigation.navigate('Favorite' as never)}>
        <Image
          source={require('../../assets/favorite.png')}
          style={stylesHeader.favoriteHeaderImage}
        />
      </Pressable>
    </View>
  );
};

export default Header;
