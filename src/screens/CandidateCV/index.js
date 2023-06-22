import React, {useLayoutEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {AppButton, HeaderBack, HeaderRightIcon, MainScreen} from '../../common';
import {ButtonView} from '../../components';
import TextInputNative from '../../components/TextInputNative';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {Images, Metrics} from '../../theme';

const CandidateCV = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBack />,
      headerRight: () => <HeaderRightIcon />,
    });
  }, [navigation]);
  return (
    <MainScreen customScreenStyles={styles.main}>
      <Image
        source={Images.images.CV}
        style={styles.cv}
        resizeMode='contain'
      />
    </MainScreen>
  );
};

export default CandidateCV;
