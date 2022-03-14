/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import stylesCard from './styles';

// interface typeMovieData {
//   id: string;
//   judul: string;
//   gambar: string;
//   rating: string;
//   durasi: string;
//   direktur: string;
//   deskripsi: string;
// }

interface TypeOfMovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface typeNav {
  navigate: Function;
  goBack: Function;
}
const Card = ({
  movieData,
  navigation,
}: {
  movieData: TypeOfMovieData;
  navigation: typeNav;
}) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Detail', {movieData: movieData})}>
      <View style={stylesCard.card}>
        <View style={stylesCard.cardContent}>
          <Image
            style={stylesCard.cardImage}
            source={{
              uri: `https://www.themoviedb.org/t/p/w440_and_h660_face/${movieData.poster_path}`,
            }}
          />
          <View style={{flex: 1}}>
            <Text style={stylesCard.cardTitle} numberOfLines={1}>
              {movieData.title}
            </Text>

            <View style={stylesCard.cardMiddleContainer}>
              <Text style={stylesCard.cardMiddleText}>
                Release Date: {movieData.release_date}
              </Text>
            </View>

            <View style={stylesCard.ratingContainer}>
              <Text style={stylesCard.cardRatingText}>
                {movieData.vote_average}
              </Text>

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
