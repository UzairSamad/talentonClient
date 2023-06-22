/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  main: {
    flex: 1,
    // marginTop: -20,
    paddingHorizontal: Metrics.ratio(0),
  },
  img: {
    width: '100%',
    height: Metrics.ratio(433),
    resizeMode: 'cover',
    borderRadius: Metrics.ratio(15),
    borderWidth: 1,
    zIndex: 0
  },
  text: {
    fontSize: Fonts.size.size_19,
    fontFamily: Fonts.type.regular,
    width: Metrics.ratio(280),
    color: Colors.secondary,
    textAlign: 'center',
    marginVertical: Metrics.ratio(30),
    alignSelf: 'center',
  },
  buttonStyle: {
    backgroundColor: Colors.greenColor,
    width: Metrics.ratio(150),
    height: Metrics.ratio(31),
    alignSelf: 'center',
  },
  buttonStyleText: {
    fontSize: Fonts.size.size_13,
    fontFamily: Fonts.type.semiBold,
  },
  slider: {
    position: 'absolute',
    bottom: Metrics.ratio(15),
    left: Metrics.ratio(5),
  },
  XBtn: {
    position: 'absolute',
    left: Metrics.ratio(60),
    top: Metrics.ratio(30),
    zIndex: 9
  },
  X: {
    width: Metrics.ratio(13),
    height: Metrics.ratio(30),
    resizeMode: 'cover',
  },
});
