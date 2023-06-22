import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Metrics.ratio(30),
  },
  text: {
    color: Colors.white,
    marginLeft: 6,
  },
  titleText: {
    fontSize: Fonts.size.size_18,
    fontFamily: Fonts.type.regular,
    color: Colors.white,
    marginRight: Metrics.ratio(3),
    alignSelf: 'center',
  },
});
