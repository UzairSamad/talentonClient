/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    height: Metrics.screenHeight - 100,
    paddingHorizontal: Metrics.ratio(0),
  },
  buttonStyleView: {
    paddingHorizontal: Metrics.ratio(28),
    marginBottom: Metrics.ratio(10),
    marginTop: 'auto',
  },
  buttonStyle: {
    marginVertical: Metrics.ratio(8),
    borderWidth: 1,
    borderColor: Colors.darkYellowColor,
  },
  innerConatainer: {
    // marginTop: Metrics.ratio(25)
  },
});
