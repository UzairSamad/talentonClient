import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const styles = StyleSheet.create({
  header: {
    height: Metrics.ratio(110),
  },
  logosyles: {
    height: Metrics.ratio(100),
    marginLeft: Metrics.ratio(20),
  },
  logoImagestyles: {
    width: Metrics.ratio(20),
  },
  child_1: {
    paddingHorizontal: Metrics.ratio(20),
    marginHorizontal: Metrics.ratio(15),
    marginTop: Metrics.ratio(40),
    paddingBottom: Metrics.ratio(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkYellowColor,
  },
  Heading: {
    color: Colors.darkYellowColor,
    fontSize: Fonts.size.size_24,
    textAlign: 'center',
    fontFamily: Fonts.type.semiBold,
    lineHeight: 22,
    marginBottom: 8,
  },
  child_2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.ratio(5),
    alignItems: 'center',
  },
  text: {
    color: '#434343',
    fontSize: Fonts.size.size_12,
  },
  signature: {
    bordercolor: '#707070',
    borderWidth: 1.5,
    width: Metrics.ratio(122),
    height: Metrics.ratio(85),
    padding: Metrics.ratio(5),
    marginTop: Metrics.ratio(5),
    backgroundColor: Colors.white,
  },
  child_3: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: Metrics.ratio(10),
  },
  btn: {
    borderWidth: 1,
    borderColor: Colors.darkYellowColor,
    width: Metrics.ratio(70),
    height: Metrics.ratio(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 0,
    marginTop: Metrics.ratio(70),
  },
  text1: {
    color: Colors.white,
    fontSize: Metrics.ratio(20),
  },
  btn1: {
    marginTop: Metrics.ratio(12),
    marginBottom: Metrics.ratio(12),
    borderRadius: 0,
    marginHorizontal: Metrics.ratio(10),
  },
  img_bg: {
    width: Metrics.ratio(300),
    height: Metrics.ratio(350),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    width: Metrics.ratio(350),
    height: Metrics.ratio(450),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Fonts.size.size_12,
    color: Colors.darkYellowColor,
    textTransform: 'uppercase',
  },
});

export default styles;
