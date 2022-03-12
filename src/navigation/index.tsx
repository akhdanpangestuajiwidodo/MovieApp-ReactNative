/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import DetailMovie from '../screen/DetailMovie';
import FavoriteMovie from '../screen/FavoriteMovie';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={DetailMovie} />
        <Stack.Screen name="Favorite" component={FavoriteMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
