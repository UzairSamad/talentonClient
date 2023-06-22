/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.ratio(28),
  },
  buttonStyleView: {
    marginBottom: Metrics.ratio(20),
    marginTop: 'auto'
  },
  buttonStyle: {
    marginVertical: Metrics.ratio(12)
  },
});
