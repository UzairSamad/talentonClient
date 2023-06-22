/** @format */

import {StyleSheet, Platform} from 'react-native';

import {Fonts, Colors, Metrics} from '../../theme';

export default StyleSheet.create({
  input: {
    backgroundColor: 'red',
    paddingVertical: Metrics.ratio(12, 12),
    paddingHorizontal: Metrics.ratio(15),
    fontSize: Fonts.size.size_15,
    color: Colors.black,
    includeFontPadding: false,
  },
  multline: {
    // height: Metrics.multilineHeight,
    paddingBottom: 24,
  },
  inputContainer: {
    height: 85,
  },
  errorText: {
    // fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.size_12,
    color: Colors.errorInput,
    marginTop: Metrics.ratio(0),
  },
  hint: {
    marginTop: Metrics.ratio(6),
  },
  title: {
    color: Colors.secondary,
    fontSize: Fonts.size.size_14,
    // marginTop: Metrics.ratio(25),
    // fontFamily: Fonts.avenierNext.medium,
  },
  arrowStyle: {marginRight: Metrics.ratio(4)},
  bottomSpace: {marginBottom: Metrics.ratio(8)},
  topSpace: {marginTop: Metrics.ratio(19)},
  labelText: {
    bottom: Metrics.ratio(0),
    fontSize: Fonts.size.size_12,
  },
  leftIconStyle: {
    width: 49,
    height: 49,
    borderRadius: 24.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 2,
    bottom: -5,
  },
  rightIconStyle: {
    // height: "100%",
    // justifyContent: "center",
    // marginLeft: 10,
    // marginRight: 3,
    // bottom: 10,
    // top: 15,
    // paddingleft: 5,
    // paddingVertical: 8,
  },
  inputContaine: {},
  onFocuslabelText: {
    fontFamily: Fonts.type.regular,
    bottom: Metrics.ratio(0),
    paddingTop: Metrics.ratio(0),
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  textField: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_13,
    color: Colors.black,
  },
});
