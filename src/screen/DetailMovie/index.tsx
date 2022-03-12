/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import HeaderDetail from '../../component/HeaderDetail';
import styles from './styles';

const DetailMovie = ({route}) => {
  const {movieData} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: `${movieData.gambar}`,
        }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.parentDetailContainer}>
          <HeaderDetail />
          <View style={styles.cardDetail}>
            <View style={styles.containerInternalCard}>
              <Text style={styles.titleCardDetail}>{movieData.judul}</Text>
              <Text style={styles.ratingCardDetail}>{movieData.rating}</Text>
              <Text style={styles.deskripsiCardDetail}>
                {movieData.deskripsi}
              </Text>
            </View>
            <TouchableHighlight style={styles.backButton} underlayColor="#ccc">
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
