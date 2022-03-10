/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
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
    <View>
      <Header />
      <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../assets/search_white.png')}
            style={styles.ImageStyle}
          />

          <TextInput
            style={styles.input}
            placeholder="Search Movie"
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
          />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: '#525A62',
    borderWidth: 0,
    fontSize: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#525A62',
    // borderWidth: 0.5,
    // borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
    color: 'grey',
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default Home;
