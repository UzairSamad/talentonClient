import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: Metrics.ratio(28),
  },
  mainFlexView: {
    // width: '100%',
    marginTop: Metrics.ratio(20),
  },
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
    width: Metrics.scaleHorizontal(26),
    height: Metrics.scaleVertical(26),
    backgroundColor: Colors.darkYellowColor,
    borderRadius: Metrics.scaleVertical(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    width: Metrics.scaleHorizontal(17),
    height: Metrics.scaleVertical(17),
    resizeMode: 'contain',
  },
  topHeading: {
    fontSize: Fonts.size.size_20,
    color: Colors.darkYellowColor,
    textTransform: 'uppercase',
    fontWeight: Fonts.type.semiBold,
    alignSelf: 'center',
    marginVertical: Metrics.ratio(20),
  },
  Heading: {
    fontSize: Fonts.size.size_16,
    color: Colors.darkBlueColor,
    textTransform: 'uppercase',
  },
  subHeading: {
    fontSize: Fonts.size.size_16,
    color: Colors.darkYellowColor,
    marginBottom: Metrics.ratio(15),
  },
  HeadingView: {
    flexDirection: 'row',
  },
  PlusSquare: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    marginLeft: -Metrics.ratio(8),
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
    marginTop: Metrics.ratio(10),
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
    position: 'absolute',
    right: Metrics.ratio(5),
    // top: -Metrics.ratio(5),
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
    marginVertical: Metrics.ratio(5),
  },
  bottomButtonStyle: {
    marginTop: 40,
    marginBottom: 10,
  },
  btnView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontSize: Fonts.size.size_10,
    color: Colors.darkBlueColor,
    fontWeight: Fonts.type.semiBold,
  },
  close: {
    width: Metrics.scaleHorizontal(10),
    height: Metrics.scaleVertical(10),
    resizeMode: 'contain',
    backgroundColor: Colors.redColor,
  },
  MainContainer: {
    flex: 1,
  },

  text: {
    fontSize: Fonts.size.size_12,
    color: Colors.secondary,
    padding: 3,
    textAlign: 'center',
    marginBottom: 0,
  },
  datePickerContainer: {
    paddingVertical: Metrics.ratio(5),
    width: Metrics.ratio(132),
    paddingHorizontal: Metrics.ratio(5),
    backgroundColor: 'transparent',
  },
  picker: {
    width: Metrics.ratio(18),
    height: Metrics.ratio(18),
    resizeMode: 'contain',
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
});

export default styles;
