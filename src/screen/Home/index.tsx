/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
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
import {getNowPlaying} from '../../services/movieService';

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

const Home = ({navigation}: any) => {
  //Handle Data Movie
  const [dataMovie, setDataMovie] = useState([]);

  //Handle Page Movie
  const [pageMovie, setPageMovie] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getNowPlaying(pageMovie)
      .then(response => {
        if (response.statusCode === 200) {
          setDataMovie(response.dataMovie.results);
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const renderItem: ListRenderItem<TypeOfMovieData> = ({item}) => (
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
          data={dataMovie}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
