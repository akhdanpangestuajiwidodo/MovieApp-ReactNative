/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../../component/Card';
import {RootState} from '../../store';
import HeaderFavorite from './HeaderFavorite';
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

const FavoriteMovie = ({navigation}: any) => {
  const result: TypeOfMovieData[] = [];
  //Use State data favorite image
  const [dataFavoriteMovie, setDataFavoriteMovie] = useState(result);

  const {theme} = useSelector((state: RootState) => state.themeReducer);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites');
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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
      //Put your Data loading function here instead of my loadData()
    });

    return unsubscribe;
  }, [navigation]);

  const renderItem: ListRenderItem<TypeOfMovieData> = ({item}) => (
    <Card movieData={item} navigation={navigation} />
  );

  return (
    <SafeAreaView
      style={theme === 'light' ? styles.parentStyle : styles.parentStyleWhite}>
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
