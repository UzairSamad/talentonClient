import React, {useLayoutEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {AppButton, HeaderBack, HeaderRightIcon, MainScreen} from '../../common';
import {AppStyles, Colors, Fonts, Images, Metrics} from '../../theme';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import styles from './styles';
import {ButtonView} from '../../components';
import {NavigationService, Util} from '../../utils';

const Profile = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBack />,
      headerRight: () => <HeaderRightIcon image={Images.icon.home} />,
    });
    navigation.setParams({
      title: 'Profile',
    });
  }, []);

  const renderFields = (title, value) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          paddingVertical: Metrics.ratio(20),
          borderColor: Colors.lightGrey,
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontFamily: Fonts.type.semiBold,
            color: Colors.darkBlueColor,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.type.semiBold,
            color: Colors.darkBlueColor,
          }}>
          {value}
        </Text>
      </View>
    );
  };
  return (
    <MainScreen>
      <View
        style={{
          alignItems: 'center',
          marginTop: Metrics.ratio(30),
          marginBottom: Metrics.ratio(10),
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
      </View>
      {renderFields('Full Name', 'Jhon Doe')}
      {renderFields('E-mail Address', 'info@email.com')}
      {renderFields('Phone Number', '+1 234 567 891')}
      {renderFields('Company Name', 'Lorem Ipsum')}
      {renderFields('Designation', 'Vice President')}
      <View style={{marginTop: Metrics.ratio(30)}}>
        <AppButton
          onPress={() => NavigationService.navigate('EditProfile')}
          title={'Edit Profile'}
        />
      </View>
    </MainScreen>
  );
};

export default Profile;
