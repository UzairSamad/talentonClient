/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.ratio(38),
  },
  innerConatainer: {
    alignItems: 'center',
  },
  logo: {
    width: Metrics.ratio(148),
    height: Metrics.ratio(105),
    resizeMode: 'contain',
    marginTop:Metrics.scaleHorizontal(50)
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
    fontSize: Metrics.ratio(14),
    width: Metrics.ratio(280),
    lineHeight: Metrics.ratio(20),
    marginVertical: Metrics.ratio(12),
    textAlign: 'center'
  },
  buttonStyleView: {
    marginTop:Metrics.scaleHorizontal(50),
  },
  buttonStyle: {
    marginVertical: Metrics.ratio(12)
  }
});
