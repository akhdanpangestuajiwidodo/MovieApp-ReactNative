/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

interface typeMovieData {
  id: string;
  judul: string;
  gambar: string;
  rating: string;
  durasi: string;
  direktur: string;
}

const Card = (props: typeMovieData) => {
  const {movieData} = props;
  console.log('Cek data', movieData);
  console.log(typeof movieData);
  return (
    <View style={stylesCard.card}>
      <View style={stylesCard.cardContent}>
        <Image
          style={stylesCard.cardImage}
          source={{
            uri: 'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
          }}
        />
        <View>
          <Text style={stylesCard.cardTitle}>{props}</Text>
          <View style={stylesCard.cardMiddleContainer}>
            <Text style={stylesCard.cardMiddleText}>Director : Akhdan</Text>
            <Text style={stylesCard.cardMiddleText}>Duration : 50 min</Text>
          </View>
          <Text style={stylesCard.cardRatingText}>8.2</Text>
        </View>
      </View>
    </View>
  );
};

const stylesCard = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C3C',
    flex: 1,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  cardImage: {width: 100, height: 100, marginEnd: 12, borderRadius: 4},
  cardTitle: {color: 'white', fontWeight: 'bold', fontSize: 18},
  cardMiddleContainer: {marginVertical: 4},
  cardMiddleText: {color: '#525A62', fontWeight: '700', fontSize: 12},
  cardRatingText: {color: '#E3C74F', fontWeight: '700', fontSize: 24},
});

export default Card;
