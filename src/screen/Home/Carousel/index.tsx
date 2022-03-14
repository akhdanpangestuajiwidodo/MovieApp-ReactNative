/* eslint-disable prettier/prettier */
import React, {useRef, useState, useEffect} from 'react';
import Carousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {View, Dimensions, StyleSheet, Platform, Pressable} from 'react-native';

// interface TypeDataMovie {
//   title: string;
//   subtitle: string;
//   illustration: string;
// }

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

interface typeNav {
  navigate: Function;
  goBack: Function;
}

const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = ({
  topMovie,
  navigation,
}: {
  topMovie: TypeOfMovieData[];
  navigation: typeNav;
}) => {
  const carouselRef = useRef(null);

  const renderItem = (
    {item}: {item: TypeOfMovieData},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('Detail', {movieData: item})}>
        <View style={styles.item}>
          <ParallaxImage
            source={{
              uri: `https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`,
            }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.1}
            {...parallaxProps}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={topMovie}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: -20,
    height: 500,
  },
  title: {
    fontSize: 12,
  },
  item: {
    width: screenWidth - 60,
    height: 160,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
