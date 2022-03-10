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

const Card = (props: {movieData: typeMovieData}) => {
  console.log(typeof props);
  const {movieData} = props;
  return (
    <View style={stylesCard.card}>
      <View style={stylesCard.cardContent}>
        <Image
          style={stylesCard.cardImage}
          source={{
            uri: `${movieData.gambar}`,
          }}
        />
        <View>
          <Text style={stylesCard.cardTitle}>{movieData.judul}</Text>
          <View style={stylesCard.cardMiddleContainer}>
            <Text style={stylesCard.cardMiddleText}>{movieData.direktur}</Text>
            <Text style={stylesCard.cardMiddleText}>{movieData.durasi}</Text>
          </View>
          <Text style={stylesCard.cardRatingText}>{movieData.rating}</Text>
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
    marginVertical: 30,
    padding: 0,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 18,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 150,
    borderRadius: 4,
    marginTop: -50,
    marginEnd: 20,
  },
  cardTitle: {color: 'white', fontWeight: 'bold', fontSize: 18},
  cardMiddleContainer: {marginVertical: 4},
  cardMiddleText: {color: '#525A62', fontWeight: '700', fontSize: 12},
  cardRatingText: {color: '#E3C74F', fontWeight: '700', fontSize: 24},
});

export default Card;
