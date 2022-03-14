/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import style from './styles';
import Card from '../../component/Card';
import Header from './Header';
import SearchBar from './SearchBar';
import MyCarousel from './Carousel';
import {getNowPlaying} from '../../services/movieService';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../../actions';
import {RootState} from '../../store';

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
  const {theme} = useSelector((state: RootState) => state.themeReducer);

  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme == 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  };

  //Handle Data Movie
  const [dataMovie, setDataMovie] = useState<TypeOfMovieData[]>([]);

  //Handle Page Movie
  const [pageMovie, setPageMovie] = useState(1);

  //Handle Loading
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [pageMovie]);

  const getData = () => {
    setIsLoading(true);
    getNowPlaying(pageMovie)
      .then(response => {
        if (response.statusCode === 200) {
          setDataMovie([...dataMovie, ...response.dataMovie.results]);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={style.loader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const fetchMore = () => {
    setPageMovie(pageMovie + 1);
    console.log(pageMovie);
  };

  const renderItem: ListRenderItem<TypeOfMovieData> = ({item}) => (
    <Card movieData={item} navigation={navigation} />
  );

  return (
    <SafeAreaView
      style={theme === 'light' ? style.parentStyle : style.parentStyleWhite}>
      <Header navigation={navigation} changeTheme={changeTheme} />
      <SearchBar />
      <Text style={theme === 'light' ? style.titleNew : style.titleNewLight}>
        Trending Now
      </Text>
      <ScrollView scrollEnabled={false}>
        <MyCarousel />
      </ScrollView>
      <Text
        style={
          theme === 'light' ? style.titleCategory : style.titleCategoryLight
        }>
        Popular
      </Text>
      <FlatList
        data={dataMovie}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        ListFooterComponent={renderLoader}
        scrollEnabled={true}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
        // onMomentumScrollBegin={false}
      />
    </SafeAreaView>
  );
};

export default Home;
