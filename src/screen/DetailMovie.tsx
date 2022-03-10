/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const DetailMovie = () => {
  return (
    <View>
      <View>
        <Image
          style={styles.detailImage}
          source={{
            uri: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/28/3841925490.jpg',
          }}
        />
      </View>
      <View style={styles.parentCardContainer}>
        <View style={styles.cardDetail}>
          <View
            style={{paddingHorizontal: 12, paddingTop: 24, paddingBottom: 14}}>
            <Text>Maniac</Text>
            <Text>Rating</Text>
            <Text>Deskripsi</Text>
          </View>
        </View>
        <View style={styles.cardDetail}>
          <View
            style={{paddingHorizontal: 12, paddingTop: 24, paddingBottom: 14}}>
            <Text>Maniac</Text>
            <Text>Rating</Text>
            <Text>Deskripsi</Text>
          </View>
        </View>
        <Button
          onPress={() => console.log('klik')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailImage: {
    width: '100%',
    height: 280,
  },
  parentCardContainer: {padding: 16},
  cardDetail: {
    backgroundColor: '#1C1C3C',
    flex: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 0,
  },
});

export default DetailMovie;
