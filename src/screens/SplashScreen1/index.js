import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {Images} from '../../theme';
import {NavigationService} from '../../utils';

const SplashScreen1 = props => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate('CustomSplashScreen');
    }, 1000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image source={Images.lottie.splashImg} style={styles.appLogoSize} />
      </View>
    </View>
  );
};

export default SplashScreen1;
