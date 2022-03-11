/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18172E',
  },
  backButton: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    backgroundColor: '#272DDA',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    flex: 1,
    marginTop: -25,
    right: 10,
  },
  favImage: {width: 23, height: 23},
  image: {
    flex: 1,
    height: '45%',
  },
  parentDetailContainer: {
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

export default styles;
