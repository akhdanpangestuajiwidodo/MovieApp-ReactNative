/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const stylesHeader = StyleSheet.create({
  containerHeader: {
    marginTop: 10,
    marginBottom: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  menuHeaderImage: {width: 19, height: 19},
  titleHeader: {color: '#FDFEFF', fontWeight: '700', fontSize: 14},
  titleHeaderWhite: {color: '#050505', fontWeight: '700', fontSize: 14},
  favoriteHeaderImage: {width: 23, height: 23},
});

export default stylesHeader;
