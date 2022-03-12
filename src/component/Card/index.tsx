/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import stylesCard from './styles';

interface typeMovieData {
  id: string;
  judul: string;
  gambar: string;
  rating: string;
  durasi: string;
  direktur: string;
}

interface typeNav {
  navigate: Function;
}
const Card = (props: {movieData: typeMovieData; navigation: typeNav}) => {
  const {movieData, navigation} = props;
  return (
    <Pressable onPress={() => navigation.navigate('Detail')}>
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
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={stylesCard.cardRatingText}>{movieData.rating}</Text>
              <Image
                source={require('../../assets/star.png')}
                style={stylesCard.imageStar}
              />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
