/** @format */

import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  main: {
    paddingTop: Metrics.ratio(40),
    paddingHorizontal: Metrics.ratio(0),
    paddingBottom: Metrics.bottomPadding,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  selectIndustryView: {
    alignSelf: 'center',
    // paddingTop: Metrics.ratio(39),
  },
  SelectRole: {
    // paddingHorizontal: Metrics.ratio(30),
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: Metrics.ratio(135),
    height: Metrics.ratio(125),
    borderRadius: 4,
    marginVertical: Metrics.ratio(12),
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.darkBlueColor,
    fontSize: Fonts.size.size_13,
  },
  img: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(40),
    resizeMode: 'contain',
    marginBottom: 8,
  },
  headerText: {
    color: Colors.darkYellowColor,
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.size_20,
    alignSelf: 'center',
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  text: {
    textTransform: 'uppercase',
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.size_20,
    color: Colors.darkYellowColor,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: Metrics.ratio(30),
    lineHeight: 24,
  },
  checkBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.ratio(22),
    height: Metrics.ratio(22),
    borderWidth: 2,
    borderRadius: 4,
  },
  itemRole: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgRole: {
    width: Metrics.ratio(90),
    height: Metrics.ratio(90),
    resizeMode: 'contain',
    marginLeft: -Metrics.ratio(24),
    marginBottom: -Metrics.ratio(20),
    marginTop: -Metrics.ratio(10),
  },
  titleRole: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.size_13,
    color: Colors.secondary,
    width: '70%',
    marginLeft: -Metrics.ratio(24),
  },
  plus: {
    width: Metrics.ratio(70),
    height: Metrics.ratio(70),
    resizeMode: 'contain',
    marginTop: Metrics.ratio(10),
  },
  plusView: {
    alignItems: 'flex-end',
    marginTop: -Metrics.ratio(12),
    marginRight: -Metrics.ratio(18),
  },
  partialCompleteBasicInfo: {
    flex: 1,
  },
  buttonStyle: {
    marginTop: Metrics.ratio(20),
  },
  textPicker: {
    fontSize: Fonts.size.size_12,
    color: Colors.secondary,
    padding: 3,
    textAlign: 'center',
    marginBottom: 0,
  },
  datePickerContainer: {
    paddingVertical: Metrics.ratio(5),
    width: Metrics.ratio(140),
    paddingHorizontal: Metrics.ratio(5),
  },
  buttonStyleFooterView: {
    marginTop: Metrics.ratio(20),
  },
});
