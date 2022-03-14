/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import stylesHeader from './styles';

interface typeNav {
  goBack: Function;
}

const HeaderFavorite = ({navigation}: {navigation: typeNav}) => {
  const {theme} = useSelector((state: RootState) => state.themeReducer);
  return (
    <View style={stylesHeader.containerHeader}>
      <Pressable onPress={() => navigation.goBack()}>
        {theme === 'light' ? (
          <Image
            source={require('../../../assets/back.png')}
            style={stylesHeader.menuHeaderImage}
          />
        ) : (
          <Image
            source={require('../../../assets/back_black.png')}
            style={stylesHeader.menuHeaderImage}
          />
        )}
      </Pressable>
      <Text
        style={
          theme === 'light'
            ? stylesHeader.titleHeader
            : stylesHeader.titleHeaderWhite
        }>
        Favorite Movie
      </Text>
    </View>
  );
};

export default HeaderFavorite;
