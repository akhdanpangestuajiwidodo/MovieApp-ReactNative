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
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Card from './src/component/Card';

const App = () => {
  return (
    <SafeAreaView style={style.parentStyle}>
      <ScrollView>
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  parentStyle: {backgroundColor: '#18172E', flex: 1, padding: 16},
});

export default App;
