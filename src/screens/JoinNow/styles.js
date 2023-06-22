/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  main: {
    paddingTop:Metrics.scaleVertical(30)
  },
  container: {
    flex: 1,
  },
  signupView: {
    flex: 1,
    marginTop: Metrics.ratio(20),
  },
  buttonStyle: {
    // marginTop: 'auto',
    marginTop: Metrics.ratio(30),
    marginBottom: Metrics.bottomPadding,
  },
  TermsAndCondtionsView: {
    paddingTop: Metrics.scaleVertical(20),
  },
  text: {
    color: Colors.secondary,
    fontFamily: Fonts.type.regular,
    fontSize: Metrics.ratio(14),
    lineHeight: 22,
    marginTop: Metrics.scaleVertical(20),
  },
  checkboxView: {
    marginVertical: Metrics.ratio(29),
  },
  homeBtnText: {
    fontFamily: Fonts.type.regular,
    fontSize: Metrics.ratio(17),
  },
});
