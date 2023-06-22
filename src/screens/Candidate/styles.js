/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.ratio(0),
  },
  buttonStyleView: {
    marginBottom: Metrics.ratio(20),
    paddingHorizontal: Metrics.ratio(38),
    marginTop: 'auto',
  },
  buttonStyle: {
    marginVertical: Metrics.ratio(12),
    marginHorizontal: Metrics.ratio(58),
    height: Metrics.ratio(38),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
