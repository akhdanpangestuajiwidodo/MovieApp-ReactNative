/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {LogBox} from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  LogBox.ignoreLogs(['Remote debugger']);
  return <Navigation />;
};

export default App;
