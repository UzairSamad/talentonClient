import React from 'react';
import {Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {ButtonView} from '../../components';
import {Colors, Images} from '../../theme';
import {NavigationService} from '../../utils';
import styles from './styles';

const HeaderBack = ({onBackPress = null}) => {
  return (
    <ButtonView
      style={styles.container}
      onPress={() =>
        onBackPress ? onBackPress() : NavigationService.goBack()
      }>
      <Icon name="left" size={18} color={Colors.white} />
      <Text style={styles.text}>Back</Text>
    </ButtonView>
  );
};

export default HeaderBack;
