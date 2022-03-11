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
  cardMiddleText: {color: '#525A62', fontWeight: '600', fontSize: 12},
  cardRatingText: {color: '#E3C74F', fontWeight: '700', fontSize: 24},
});

export default stylesCard;
