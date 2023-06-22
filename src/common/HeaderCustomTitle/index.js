import React from 'react';
import {Image, Text, View} from 'react-native';
import {ButtonView} from '../../components';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import {NavigationService} from '../../utils';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

const HeaderCustomTitle = ({
  title,
  customContainerStyle,
  onPress = () => null,
  showFilterIcon = true,
}) => {
  return (
    <View style={[styles.container, customContainerStyle]}>
      <View
        style={{
          marginRight: Metrics.ratio(10),
          marginTop: Metrics.ratio(6),
          flexDirection: 'row',
        }}>
        <Text style={styles.titleText}>{title}</Text>
        <Image
          style={{
            height: Metrics.ratio(33),
            width: Metrics.ratio(47),
            marginLeft: Metrics.ratio(16),
          }}
          source={Images.images.headerIcon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default HeaderCustomTitle;
