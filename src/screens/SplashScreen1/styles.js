/** @format */

import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogoSize: {
    width: '100%',
    height: '100%',
    borderRadius: Metrics.ratio(50),
    resizeMode: 'contain',
  },
  logoContainer: {
    borderRadius: Metrics.ratio(50),
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
});

export default styles;