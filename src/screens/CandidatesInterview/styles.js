/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.ratio(0),
  },
  buttonStyleView: {
    paddingHorizontal: Metrics.ratio(28),
    marginBottom: Metrics.ratio(0),
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Metrics.bottomPadding,
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
