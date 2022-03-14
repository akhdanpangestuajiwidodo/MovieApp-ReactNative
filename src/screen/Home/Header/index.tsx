/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import stylesHeader from './styles';

interface typeNav {
  navigate: Function;
  goBack: Function;
}

type typeChangeTheme = {
  changeTheme: () => void;
};

const Header = ({
  navigation,
  changeTheme,
}: {
  navigation: typeNav;
  changeTheme: () => void;
}) => {
  console.log(changeTheme);
  return (
    <View style={stylesHeader.containerHeader}>
      <Pressable onPress={changeTheme}>
        <Image
          source={require('../../../assets/menu.png')}
          style={stylesHeader.menuHeaderImage}
        />
      </Pressable>

      <Text style={stylesHeader.titleHeader}>Movie App</Text>
      <Pressable onPress={() => navigation.navigate('Favorite' as never)}>
        <Image
          source={require('../../../assets/favorite.png')}
          style={stylesHeader.favoriteHeaderImage}
        />
      </Pressable>
    </View>
  );
};

export default Header;
