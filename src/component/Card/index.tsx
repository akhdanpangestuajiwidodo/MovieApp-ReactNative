/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View} from 'react-native';
import stylesCard from './styles';

interface typeMovieData {
  id: string;
  judul: string;
  gambar: string;
  rating: string;
  durasi: string;
  direktur: string;
}

const Card = (props: {movieData: typeMovieData}) => {
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
            <Text style={stylesCard.cardMiddleText}>
              Director: {movieData.direktur}
            </Text>
            <Text style={stylesCard.cardMiddleText}>
              Duration: {movieData.durasi} min
            </Text>
          </View>
          <Text style={stylesCard.cardRatingText}>{movieData.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
