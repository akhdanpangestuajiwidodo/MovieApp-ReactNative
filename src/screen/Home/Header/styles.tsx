/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const stylesHeader = StyleSheet.create({
  containerHeader: {
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '10%',
    marginBottom: '14%',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  menuHeaderImage: {width: 25, height: 25, transform: [{scaleX: -1}]},
  titleHeader: {color: '#FDFEFF', fontWeight: '700', fontSize: 14},
  titleHeaderLight: {color: '#050505', fontWeight: '700', fontSize: 14},
  favoriteHeaderImage: {width: 23, height: 23},
});

export default stylesHeader;
