/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import style from './styles';
import Card from '../../component/Card';
import Header from '../../component/Header';
import SearchBar from '../../component/SearchBar';
import MyCarousel from '../../component/Carousel';

interface typeMovieData {
  id: string;
  judul: string;
  gambar: string;
  rating: string;
  durasi: string;
  direktur: string;
  deskripsi: string;
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

const Home = ({navigation}: any) => {
  const renderItem: ListRenderItem<typeMovieData> = ({item}) => (
    <Card movieData={item} navigation={navigation} />
  );
  return (
    <SafeAreaView style={style.parentStyle}>
      <ScrollView>
        <Header navigation={navigation} />
        <SearchBar />
        <Text style={style.titleNew}>Trending Now</Text>
        <MyCarousel />
        <Text style={style.titleCategory}>Popular</Text>
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

export default Home;
