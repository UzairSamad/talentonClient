import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {Images, Metrics} from '../../theme';
import {Util} from '../../utils';
import styles from './style';

const MainScreen = ({children, customScreenStyles, isJustifyCenter = true}) => {
  return (
    <ScrollView
      style={{
        flexGrow: 1,
      }}
      bounces={false}
      automaticallyAdjustKeyboardInsets
      keyboardShouldPersistTaps="handled">
      <Image
        source={Images.images.appBg}
        style={{
          position: 'absolute',
          minHeight: Metrics.screenHeight,
          height: '100%',
        }}
        resizeMode="stretch"
      />
      <View
        style={[
          {
            paddingHorizontal: Metrics.ratio(38),
            marginBottom: Metrics.bottomPadding,
          },
          customScreenStyles,
        ]}>
        {children}
      </View>
    </ScrollView>
  );
};
export default MainScreen;
