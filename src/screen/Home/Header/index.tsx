/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import stylesHeader from './styles';

interface typeNav {
  navigate: Function;
  goBack: Function;
}

const Header = ({
  navigation,
  changeTheme,
}: {
  navigation: typeNav;
  changeTheme: () => void;
}) => {
  const {theme} = useSelector((state: RootState) => state.themeReducer);
  return (
    <View style={stylesHeader.containerHeader}>
      <Pressable onPress={changeTheme}>
        <Image
          source={require('../../../assets/dark-mode.png')}
          style={stylesHeader.menuHeaderImage}
        />
      </Pressable>

      <Text
        style={
          theme === 'light'
            ? stylesHeader.titleHeader
            : stylesHeader.titleHeaderLight
        }>
        Movie App
      </Text>
      <Pressable onPress={() => navigation.navigate('Favorite' as never)}>
        {theme === 'light' ? (
          <Image
            source={require('../../../assets/favorite.png')}
            style={stylesHeader.favoriteHeaderImage}
          />
        ) : (
          <Image
            source={require('../../../assets/heart_black.png')}
            style={stylesHeader.favoriteHeaderImage}
          />
        )}
      </Pressable>
    </View>
  );
};

export default Header;
