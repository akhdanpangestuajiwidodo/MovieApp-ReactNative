/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderDetail from '../../component/HeaderDetail';
import styles from './styles';

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

const DetailMovie = ({route, navigation}: any) => {
  const {movieData} = route.params;

  //Use State data favorite image
  const [dataFavoriteMovie, setDataFavoriteMovie] = useState<TypeOfMovieData[]>(
    [],
  );

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites');
      if (jsonValue !== null) {
        let newData = JSON.parse(jsonValue as string);
        setDataFavoriteMovie(newData);
        console.log('data ada');
      } else {
        console.log('data kosong');
        return [];
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const storeData = async (value: any) => {
    try {
      const data = [...dataFavoriteMovie];
      data.push(value);
      setDataFavoriteMovie(data);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favorites', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: `https://www.themoviedb.org/t/p/w440_and_h660_face/${movieData.poster_path}`,
        }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.parentDetailContainer}>
          <HeaderDetail navigation={navigation} />
          <View style={styles.cardDetail}>
            <View style={styles.containerInternalCard}>
              <Text style={styles.titleCardDetail}>{movieData.title}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.cardRatingText}>
                  {movieData.vote_average}
                </Text>

                <Image
                  source={require('../../assets/star.png')}
                  style={styles.imageStar}
                />
              </View>
              <Text style={styles.deskripsiCardDetail}>
                {movieData.overview}
              </Text>
            </View>
            <TouchableHighlight
              style={styles.backButton}
              underlayColor="#ccc"
              onPress={() => storeData(movieData)}>
              <Image
                source={require('../../assets/favorite.png')}
                style={styles.favImage}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.cardDetail}>
            <View style={styles.containerInternalCard}>
              <View style={styles.titleActorCard}>
                <Text style={styles.titleActor}>Actor</Text>
                <Text style={styles.textSeeAll}>See all</Text>
              </View>
              <View style={styles.imageActorList}>
                <Image
                  source={{
                    uri: 'https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg',
                  }}
                  style={styles.menuHeaderImage}
                />
                <Image
                  source={{
                    uri: 'https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg',
                  }}
                  style={styles.menuHeaderImage}
                />
                <Image
                  source={{
                    uri: 'https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg',
                  }}
                  style={styles.menuHeaderImage}
                />
                <Image
                  source={{
                    uri: 'https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg',
                  }}
                  style={styles.menuHeaderImage}
                />
                <Image
                  source={{
                    uri: 'https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg',
                  }}
                  style={styles.menuHeaderImage}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DetailMovie;
