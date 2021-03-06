/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const stylesCard = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C3C',
    flex: 1,
    borderRadius: 8,
    marginVertical: 30,
    marginHorizontal: 10,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 18,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 150,
    borderRadius: 4,
    marginTop: -50,
    marginEnd: 20,
  },
  cardTitle: {color: '#FDFEFFc1', fontWeight: 'bold', fontSize: 18},
  cardMiddleContainer: {marginVertical: 4},
  cardMiddleText: {color: '#AEAEAE', fontWeight: '600', fontSize: 12},
  imageStar: {width: 12, height: 12, marginTop: 4},
  cardRatingText: {
    color: '#E3C74F',
    fontWeight: '700',
    fontSize: 24,
    marginRight: 7,
  },
  ratingContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default stylesCard;
