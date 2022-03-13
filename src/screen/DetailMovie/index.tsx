/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Alert,
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

  //Use state for change button add favorite
  const [statusIsFavorite, setStatusFavorite] = useState(false);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites');
      if (jsonValue !== null) {
        let newData = JSON.parse(jsonValue as string);
        setDataFavoriteMovie(newData);
        return newData;
      } else {
        console.log('data kosong');
        return [];
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData().then(e => {
      for (var product of e) {
        if (product.id === movieData.id) {
          setStatusFavorite(true);
        } else {
          console.log('tidak sama');
        }
      }
    });
  }, []);

  const createThreeButtonAlert = (textAlert: string, subTextAlert: string) =>
    Alert.alert(textAlert, subTextAlert, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const storeData = async (value: TypeOfMovieData) => {
    try {
      const dataBaru = [...dataFavoriteMovie];
      // const existData = dataBaru.find(v => v.id === value.id);
      let textAlert;
      let subTextAlert;
      if (statusIsFavorite === true) {
        const contactIndex = dataFavoriteMovie.findIndex(
          movie => movie.id === value.id,
        );
        dataBaru.splice(contactIndex, 1);
        await AsyncStorage.setItem('@favorites', JSON.stringify(dataBaru));
        setStatusFavorite(false);
        textAlert = 'Berhasil Di Hapus';
        subTextAlert = 'Yuk cari film lagi';
        createThreeButtonAlert(textAlert, subTextAlert);
      } else {
        dataBaru.push(value);
        await AsyncStorage.setItem('@favorites', JSON.stringify(dataBaru));
        setStatusFavorite(true);
        textAlert = 'Berhasil Di Simpan';
        subTextAlert = 'Yuk cari film lagi';
        createThreeButtonAlert(textAlert, subTextAlert);
      }
    } catch (e) {
      console.error(e);
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
            {statusIsFavorite === true ? (
              <TouchableHighlight
                style={styles.backButton}
                underlayColor="#ccc"
                onPress={() => storeData(movieData)}>
                <Image
                  source={require('../../assets/heart.png')}
                  style={styles.favImage}
                />
              </TouchableHighlight>
            ) : (
              <TouchableHighlight
                style={styles.backButtonWhite}
                underlayColor="#ccc"
                onPress={() => storeData(movieData)}>
                <Image
                  source={require('../../assets/favorite.png')}
                  style={styles.favImage}
                />
              </TouchableHighlight>
            )}
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
