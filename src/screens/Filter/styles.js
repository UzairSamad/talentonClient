import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: Metrics.ratio(28),
  },
  mainFlexView: {},
  conatiner: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Child1: {
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.LightWhite,
    paddingVertical: 7,
  },
  buttonmainstyle: {
    width: Metrics.scaleHorizontal(20),
    height: Metrics.scaleVertical(20),
    backgroundColor: Colors.darkYellowColor,
    borderRadius: Metrics.scaleVertical(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    width: Metrics.scaleHorizontal(10),
    height: Metrics.scaleVertical(10),
    resizeMode: 'contain',
  },
  topHeading: {
    fontSize: Fonts.size.size_20,
    color: Colors.darkYellowColor,
    textTransform: 'uppercase',
    fontFamily: Fonts.type.semiBold,
    alignSelf: 'center',
    marginTop: Metrics.ratio(25),
    marginBottom: Metrics.scaleVertical(20),
  },
  Heading: {
    fontSize: Fonts.size.size_14,
    color: Colors.darkBlueColor,
    textTransform: 'uppercase',
    marginLeft: Metrics.ratio(6),
    fontFamily: Fonts.type.bold,
  },
  subHeading: {
    fontSize: Fonts.size.size_12,
    color: Colors.darkYellowColor,
    marginVertical: 10,
  },
  HeadingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.ratio(10),
  },
  PlusSquare: {
    backgroundColor: 'red',
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },
  SmallinputStyles: {
    borderWidth: 1,
    borderColor: Colors.darkYellowColor,
    width: Metrics.scaleHorizontal(100),
    height: Metrics.scaleVertical(35),
    borderRadius: 20,
    backgroundColor: '#F3F7FC',
  },
  switchView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: Metrics.scaleVertical(20),
    marginTop: Metrics.scaleVertical(10),
  },
  Heading1: {
    fontSize: Fonts.size.size_11,
    alignItems: 'center',
    marginVertical: 5,
    color: Colors.darkBlueColor,
    marginRight: Metrics.ratio(3),
    width: Metrics.ratio(60),
  },
  Heading_3: {
    fontSize: Fonts.size.size_12,
    alignItems: 'flex-end',
    textTransform: 'capitalize',
    color: Colors.darkYellowColor,
    width: 25,
    marginLeft: Metrics.ratio(15),
  },
  value_text: {
    fontSize: Fonts.size.size_12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: Colors.darkYellowColor,
  },
  Heading2: {
    fontSize: Fonts.size.size_12,
    color: Colors.darkBlueColor,
  },
  MeinView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  childFlexView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.scaleVertical(5),
  },
  btnView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontSize: Fonts.size.size_10,
    color: Colors.darkBlueColor,
    fontFamily: Fonts.type.semiBold,
  },
  close: {
    width: Metrics.scaleHorizontal(10),
    height: Metrics.scaleVertical(10),
    resizeMode: 'contain',
    backgroundColor: Colors.redColor,
  },
  inputStyle: {
    width: Metrics.scaleHorizontal(150),
    height: 50,
    borderRadius: 5,
  },
  bottomButtonStyle: {
    paddingBottom: Metrics.paddingBottom,
  },
});

export default styles;
