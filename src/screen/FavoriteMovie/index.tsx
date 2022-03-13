/* eslint-disable handle-callback-err */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  ListRenderItem,
  Pressable,
  SafeAreaView,
  Text,
} from 'react-native';
import Card from '../../component/Card';
import HeaderFavorite from '../../component/HeaderFavorite';
import styles from './styles';

interface typeMovieData {
  id: string;
  judul: string;
  gambar: string;
  rating: string;
  durasi: string;
  direktur: string;
  deskripsi: string;
}

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

const DATA: typeMovieData[] = [
  {
    id: '1',
    judul: 'Deddy Corbuizer',
    gambar:
      'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/28/3841925490.jpg',
    rating: '8.0',
    durasi: '30',
    direktur: 'Akhdan',
    deskripsi:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorum fugit dolore dolorem est! Inventore placeat omnis praesentium ratione itaque dolorum ad non magnam alias perferendis! Quod ad beatae quo!',
  },
  {
    id: '2',
    judul: 'Black Window',
    gambar:
      'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
    rating: '9.0',
    durasi: '50',
    direktur: 'Kak Vito',
    deskripsi:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorum fugit dolore dolorem est! Inventore placeat omnis praesentium ratione itaque dolorum ad non magnam alias perferendis! Quod ad beatae quo!',
  },
  {
    id: '3',
    judul: 'Aladdin',
    gambar:
      'https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg',
    rating: '7.0',
    durasi: '100',
    direktur: 'Dwika',
    deskripsi:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorum fugit dolore dolorem est! Inventore placeat omnis praesentium ratione itaque dolorum ad non magnam alias perferendis! Quod ad beatae quo!',
  },
];

const FavoriteMovie = ({navigation}: any) => {
  const result: TypeOfMovieData[] = [];
  //Use State data favorite image
  const [dataFavoriteMovie, setDataFavoriteMovie] = useState(result);

  const getData2 = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites');
      console.log(jsonValue);
      if (jsonValue !== null) {
        let newData = JSON.parse(jsonValue as string);
        setDataFavoriteMovie(newData);
      } else {
        console.log('data kosong');
        return [];
      }
    } catch (e) {
      // error reading value
    }
  };

  // //getData
  // const getData = async () => {
  //   AsyncStorage.getAllKeys((err, keys) => {
  //     AsyncStorage.multiGet(keys, (error, stores) => {
  //       console.log(stores?.length);
  //       stores.map((result, i, store) => {
  //         console.log('Dataku', {[store[i][0]]: store[i][1]});
  //         return true;
  //       });
  //     });
  //   });
  // };

  useEffect(() => {
    getData2();
  }, []);

  const renderItem: ListRenderItem<TypeOfMovieData> = ({item}) => (
    <Card movieData={item} navigation={navigation} />
  );
  return (
    <SafeAreaView style={styles.parentStyle}>
      <HeaderFavorite navigation={navigation} />
      <FlatList
        data={dataFavoriteMovie}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
};

export default FavoriteMovie;
