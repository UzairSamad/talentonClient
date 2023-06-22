/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  main: {
    paddingHorizontal: Metrics.ratio(38),
    marginBottom: Metrics.ratio(80),
  },
  buttonStyle: {
    marginTop: Metrics.ratio(38),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: Metrics.ratio(24),
  },
  footerText: {
    marginRight: Metrics.ratio(5),
    color: Colors.secondary,
    fontFamily: Fonts.type.regular,
    fontSize: Metrics.ratio(14),
  },
  signUpText: {
    textDecorationLine: 'underline',
    color: Colors.darkYellowColor,
    fontFamily: Fonts.type.semiBold,
    fontSize: Metrics.ratio(14),
  },
  codeText: {
    color: Colors.secondary,
    fontFamily: Fonts.type.semiBold,
    fontSize: Metrics.ratio(13),
  },
});
