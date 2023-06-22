/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  main: {
    // marginHorizontal: Metrics.ratio(10),
    alignItem: 'center',
    height: Metrics.screenHeight - 120,
    paddingHorizontal: Metrics.ratio(0),
  },
  cv: {
    width: Metrics.ratio(320),
    height: Metrics.ratio(501),
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});
