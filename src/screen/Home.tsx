/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Card from '../component/Card';
import Header from '../component/Header';
import SearchBar from '../component/SearchBar';

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
    judul: 'Deddy Corbuizer',
    gambar:
      'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/28/3841925490.jpg',
    rating: '8.0',
    durasi: '30',
    direktur: 'Akhdan',
  },
  {
    id: '2',
    judul: 'Black Window',
    gambar:
      'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg',
    rating: '9.0',
    durasi: '50',
    direktur: 'Kak Vito',
  },
  {
    id: '3',
    judul: 'Aladdin',
    gambar:
      'https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg',
    rating: '7.0',
    durasi: '100',
    direktur: 'Dwika',
  },
];

const renderItem: ListRenderItem<typeMovieData> = ({item}) => (
  <Card movieData={item} />
);

const Home = () => {
  return (
    <SafeAreaView style={style.parentStyle}>
      <ScrollView>
        <Header />
        <SearchBar />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  parentStyle: {backgroundColor: '#18172E', flex: 1, paddingHorizontal: 0},
});
export default Home;
