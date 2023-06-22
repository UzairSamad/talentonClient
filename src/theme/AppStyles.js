import {StyleSheet, I18nManager} from 'react-native';

import Metrics from './Metrics';
import Colors from './Colors';
import Fonts from './Fonts';
import {Util} from '../utils';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  flashMessage: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.size_16,
    color: Colors.white,
    lineHeight: Metrics.ratio(22),
  },
  transformImage: {
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  alignCenterView: {justifyContent: 'center', alignItems: 'center'},
  flatlistContentContainer: {},
  headerStyle: {
    elevation: 0,
    backgroundColor: Colors.darkBlueColor,
    height: Util.isPlatformIOS()
      ? Metrics.screenHeight * 0.15
      : Metrics.screenHeight * 0.11,
  },
  headerTitleStyle: {
    marginTop: Metrics.scaleVertical(20),
    marginLeft: Metrics.ratio(10),
  },
  headerLeftContainerStyle: {
    left: Util.isPlatformIOS() ? 10 : 10,
    top: Metrics.scaleVertical(-25),
  },
  headerRightContainerStyles: {
    right: Util.isPlatformIOS() ? 10 : 10,
    top: Metrics.scaleVertical(-25),
  },
});
