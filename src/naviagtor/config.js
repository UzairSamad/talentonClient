/** @format */
import React from 'react';
//import { HeaderBackImage } from "../common";
import { AppStyles, Colors, Fonts, Images, Metrics } from '../theme';
import { Image, Text, View } from 'react-native';
export const screenOptions = ({ route, navigation }) => {
  return {
    headerBackTitleVisible: false,
    headerStyle: AppStyles.headerStyle,
    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerLeftContainerStyle: AppStyles.headerLeftContainerStyle,
    headerRightContainerStyle: AppStyles.headerRightContainerStyles,
    headerTitleStyle: AppStyles.headerTitleStyle,
    headerLeft: () => null,
    headerTitle: () => (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: Colors.white,
            fontSize: Fonts.size.size_16,
            textAlignVertical: 'bottom',
            fontFamily: Fonts.type.regular,
          }}>
          {route?.params?.title || ''}
        </Text>
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
    ),
  };
};
export const screenOptionForInnerScreensSearch = () => {
  return {
    headerShown: true,
    headerStyle: AppStyles.headerStyle,
    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerBackTitle: ' ',
    headerLeftContainerStyle: AppStyles.headerLeftContainerStyle,
    headerTitleStyle: AppStyles.headerTitleStyle,
  };
};
