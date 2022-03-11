/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

const DetailMovie = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg',
        }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.text}>
          <View style={styles.cardDetail}>
            <View style={styles.containerInternalCard}>
              <Text style={styles.titleCardDetail}>Maniac</Text>
              <Text style={styles.ratingCardDetail}>9.0</Text>
              <Text style={styles.deskripsiCardDetail}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat est, debitis eligendi eius recusandae quisquam facilis
                earum ipsa, perspiciatis quia doloremque exercitationem
                repellendus quo totam modi sequi eum molestias quasi.
              </Text>
            </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18172E',
  },
  image: {
    flex: 1,
    height: '45%',
  },
  text: {
    flex: 1,
    padding: 16,
  },
  titleCardDetail: {fontSize: 20, color: '#FDFEFF', fontWeight: 'bold'},
  ratingCardDetail: {
    fontSize: 16,
    color: '#E3C74F',
    fontWeight: '700',
    marginVertical: 10,
  },
  deskripsiCardDetail: {fontSize: 12, color: '#525A62', fontWeight: '600'},
  parentCardContainer: {
    paddingHorizontal: 8,
    marginHorizontal: 10,
  },
  titleActorCard: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 16,
  },
  titleActor: {fontSize: 20, color: '#FDFEFF', fontWeight: 'bold'},
  textSeeAll: {fontSize: 12, color: '#525A62', fontWeight: '600'},
  imageActorList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardDetail: {
    backgroundColor: '#1C1C3C',
    borderRadius: 8,
    marginVertical: 10,
    paddingEnd: 24,
  },
  menuHeaderImage: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    overflow: 'hidden',
  },
  containerInternalCard: {
    paddingHorizontal: 12,
    paddingTop: 24,
    paddingBottom: 14,
  },
});

export default DetailMovie;
