/** @format */

import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

export default StyleSheet.create({
  containerStyle: {
    width: Metrics.ratio(40),
    height: Metrics.ratio(13),
    borderRadius: Metrics.ratio(36.5),
    padding: Metrics.ratio(0),
  },
  circleStyle: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
    borderRadius: Metrics.ratio(100),
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    // shadowRadius: 8,
    shadowOpacity: 0.5,
  },
});
