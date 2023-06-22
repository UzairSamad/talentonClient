import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AppButton,
  CustomCard,
  HeaderBack,
  InterviewScheduleCard,
  MainScreen,
} from '../../common';
import TextInputNative from '../../components/TextInputNative';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {Colors, Images, Metrics} from '../../theme';
import {useLayoutEffect} from 'react';
import CardStack, {Card} from 'react-native-card-stack-swiper';

const InterviewSchedule = ({navigation}) => {
  const [isSelected, setIsSelected] = useState(false);
  const dataList = [
    {
      id: 1,
      name: 'steve Winshester',
      interviewDate: '4-5-22. at 9:00am PST',
      interviewVideo: 'Confirmed',
      isSelected: true,
    },
    {
      id: 2,
      name: 'steve Winshester',
      interviewDate: '4-5-22. at 9:00am PST',
      interviewVideo: 'Confirmed',
      isSelected: false,
    },
    {
      id: 3,
      name: 'steve Winshester',
      interviewDate: '4-5-22. at 9:00am PST',
      interviewVideo: 'Confirmed',
      isSelected: false,
    },
    {
      id: 4,
      name: 'steve Winshester',
      interviewDate: '4-5-22. at 9:00am PST',
      interviewVideo: 'Confirmed',
      isSelected: true,
    },
    {
      id: 5,
      name: 'steve Winshester',
      interviewDate: '4-5-22. at 9:00am PST',
      interviewVideo: 'Confirmed',
      isSelected: false,
    },
    {
      id: 6,
      name: 'steve Winshester',
      interviewDate: '4-5-22. at 9:00am PST',
      interviewVideo: 'Confirmed',
      isSelected: false,
    },
    {
      id: 7,
      name: 'steve Winshester',
      interviewDate: '4-5-22. at 9:00am PST',
      interviewVideo: 'Confirmed',
      isSelected: true,
    },
    {
      id: 8,
      name: 'steve Winshester',
      interviewDate: '4-5-22. at 9:00am PST',
      interviewVideo: 'Confirmed',
      isSelected: false,
    },
    {
      id: 9,
      name: 'steve Winshester',
      interviewDate: '4-5-22. at 9:00am PST',
      interviewVideo: 'Confirmed',
      isSelected: false,
    },
  ];

  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Interview Schedule',
    });
    navigation.setOptions({
      headerLeft: () => <HeaderBack />,
    });
  }, [navigation]);

  const onSelected = () => {
    setIsSelected(true);
  };

  const LogoTextContainer = () => {
    return (
      <View style={styles.innerConatainer}>
        <FlatList
          data={dataList}
          renderItem={({item, index}) => (
            <InterviewScheduleCard
              data={item}
              onDeSelected={item.isSelected}
              onSelected={() => onSelected(item.isSelected)}
              lastIndex={dataList?.length - 1}
              index={index}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const createShortList = () => {
    NavigationService.navigate('');
  };

  const Footer = () => {
    return (
      <View style={styles.buttonStyleView}>
        <AppButton
          title="Create Shortlist"
          // onPress={createShortList}
          containerStyle={[styles.buttonStyle]}
        />
      </View>
    );
  };
  const [swiper, setSwiper] = useState(null);

  return (
    <MainScreen customScreenStyles={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1}}>
        {LogoTextContainer()}
      </ScrollView>
    </MainScreen>
  );
};

export default InterviewSchedule;
