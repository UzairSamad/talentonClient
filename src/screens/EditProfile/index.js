import React, {useLayoutEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {AppButton, HeaderBack, HeaderRightIcon, MainScreen} from '../../common';
import {AppStyles, Colors, Fonts, Images, Metrics} from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import styles from './styles';
import {ButtonView} from '../../components';
import {NavigationService, Util} from '../../utils';
import TextInputNative from '../../components/TextInputNative';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';

const EditProfile = ({navigation}) => {
  const [
    formObj,
    nameProps,
    emailProps,
    phoneProps,
    companyNameProps,
    designationProps,
  ] = useHookForm(
    ['name', 'email', 'phone', 'compnany', 'designation'],
    {},
    ValidationSchema.editProfile,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBack />,
      headerRight: () => <HeaderRightIcon image={Images.icon.home} />,
    });
    navigation.setParams({
      title: 'Edit Profile',
    });
  }, []);

  return (
    <MainScreen>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: Metrics.ratio(30),
          marginBottom: Metrics.ratio(10),
          flexDirection: 'row',
        }}>
        <Image
          source={Images.images.picture}
          style={{
            height: Metrics.ratio(100),
            width: Metrics.ratio(100),
            borderRadius: Metrics.ratio(50),
            borderWidth: 1,
            borderColor: Colors.darkBlueColor,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 10,
            width: Metrics.ratio(120),
          }}>
          <ButtonView>
            <AntDesign name="camerao" size={22} />
          </ButtonView>
        </View>
      </View>
      <View>
        <TextInputNative
          title={'Full Name'}
          customPlaceholder={'Enter your name'}
          topSpaceLarge
          {...nameProps}
        />
        <TextInputNative
          nextFocusRef={emailProps.forwardRef}
          title={'E-mail'}
          customPlaceholder={'Enter your email'}
          topSpaceLarge
          {...emailProps}
        />
        <TextInputNative
          nextFocusRef={phoneProps.forwardRef}
          maxLength={30}
          title={'Phone'}
          keyboardType="numeric"
          customPlaceholder={'Enter your phone number'}
          topSpaceLarge
          {...phoneProps}
        />
        <TextInputNative
          nextFocusRef={companyNameProps.forwardRef}
          maxLength={30}
          title={'Company Name'}
          customPlaceholder={'Enter your Company Name'}
          topSpaceLarge
          {...companyNameProps}
        />
        <TextInputNative
          nextFocusRef={designationProps.forwardRef}
          maxLength={30}
          title={'Designation'}
          customPlaceholder={'Enter your Designation'}
          topSpaceLarge
          {...designationProps}
          bottomSpaceLarge
          containerStyle={{marginBottom: Metrics.ratio(20)}}
        />
      </View>
      <View style={{marginTop: Metrics.ratio(30)}}>
        <AppButton title={'Save'} onPress={() => NavigationService.goBack()} />
      </View>
    </MainScreen>
  );
};

export default EditProfile;
