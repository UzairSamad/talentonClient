/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: Colors.redColor,
    // paddingHorizontal: Metrics.ratio(38),
  },
  innerConatainer: {
    alignItems: 'center',
  },
  logo: {
    width: Metrics.ratio(148),
    height: Metrics.ratio(105),
    resizeMode: 'contain',
    marginTop: Metrics.ratio(220),
  },
  header: {
    color: Colors.blueishGray,
    textTransform: 'uppercase',
    fontFamily: Fonts.type.bold,
    fontSize: Metrics.ratio(47),
    marginVertical: Metrics.ratio(12),
  },
  subHeader: {
    color: Colors.gray40,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_14,
    lineHeight: Metrics.ratio(20),
    marginVertical: Metrics.ratio(12),
    textAlign: 'center',
  },
  buttonStyleView: {
    marginBottom: Metrics.ratio(84),
    marginTop: 'auto',
  },
  buttonStyle: {
    marginVertical: Metrics.ratio(12),
  },
});
