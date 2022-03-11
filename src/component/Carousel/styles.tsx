/* eslint-disable prettier/prettier */
import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 12,
  },
  item: {
    width: screenWidth - 60,
    height: 170,
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

export default styles;
