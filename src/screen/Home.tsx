/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import Card from '../component/Card';
import Header from '../component/Header';

interface typeMovieData {
  id: string;
  judul: string;
  gambar: string;
  rating: string;
  durasi: string;
  direktur: string;
}

const DATA: typeMovieData[] = [
  {
    id: '1',
    judul: 'Black Window',
    gambar:
      'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
    rating: '9.0',
    durasi: '50',
    direktur: 'Kak Vito',
  },
  {
    id: '2',
    judul: 'Aladdin',
    gambar:
      'https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg',
    rating: '7.0',
    durasi: '100',
    direktur: 'Dwika',
  },
  {
    id: '3',
    judul: 'Black Window',
    gambar:
      'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
    rating: '9.0',
    durasi: '50',
    direktur: 'Kak Vito',
  },
];

const renderItem: ListRenderItem<typeMovieData> = ({item}) => (
  <Card movieData={item} />
);

const Home = () => {
  return (
    <View>
      <Header />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
