/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  text: {padding: 30},
  buttonStyle: {
    backgroundColor: Colors.darkYellowColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.ratio(50, 50, true),
  },
  buttonTextStyle: {
    color: Colors.white,
    fontSize: Metrics.generatedFontSize(16, 16, true),
    // fontFamily: Fonts.avenierNext.demiBold,
  },
});
