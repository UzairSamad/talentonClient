/** @format */

import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images, Metrics} from '../../theme';
import styles from './styles';
import {AppButton, MainScreen} from '../../common';
import NavigationService from '../../utils/NavigationService';
import {useLayoutEffect} from 'react';
import {screenOptions} from '../../naviagtor/config';

export default function CustomSplashScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const LogoTextContainer = () => {
    return (
      <View style={styles.innerConatainer}>
        <Image style={styles.logo} source={Images.icon.talentonLogo} />
        <Text style={[styles.header]}>TALENTON</Text>
        <Text style={styles.subHeader}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
    );
  };

  const onSignUp = () => {
    NavigationService.navigate('JoinNow');
  };

  const onSignIn = () => {
    NavigationService.navigate('SignIn');
  };

  const Footer = () => {
    return (
      <View style={styles.buttonStyleView}>
        <AppButton
          title="Sign Up"
          containerStyle={styles.buttonStyle}
          onPress={onSignUp}
        />

        <AppButton
          title="Sign In"
          containerStyle={styles.buttonStyle}
          onPress={onSignIn}
        />
      </View>
    );
  };

  return (
    <MainScreen>
      <View style={{height: Metrics.screenHeight}}>
        {LogoTextContainer()}
        {Footer()}
      </View>
    </MainScreen>
  );
}
