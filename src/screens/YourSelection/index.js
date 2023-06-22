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
  MainScreen,
  YourSelectionCard,
} from '../../common';
import TextInputNative from '../../components/TextInputNative';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {Colors, Images, Metrics} from '../../theme';
import {useLayoutEffect} from 'react';
import {SuccessModal} from '../../components';

const YourSelection = ({navigation}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [showmodal, setShowModal] = useState(false);

  const dataList = [
    {
      id: 1,
      name: 'steve Winshester',
      crewDistance: '8 Miles',
      cfAExperience: '3 Years',
      minSalary: '$120K',
      picture: Images.images.picture,
      isSelected: true,
      status: 'ACCEPTED',
    },
    {
      id: 2,
      name: 'steve Winshester',
      crewDistance: '8 Miles',
      cfAExperience: '3 Years',
      minSalary: '$120K',
      picture: Images.images.picture,
      isSelected: false,
      status: 'waiting for confirmation',
    },
    {
      id: 3,
      name: 'steve Winshester',
      crewDistance: '8 Miles',
      cfAExperience: '3 Years',
      minSalary: '$120K',
      picture: Images.images.picture,
      status: 'rejected',
      isSelected: false,
    },
    {
      id: 4,
      name: 'steve Winshester',
      crewDistance: '8 Miles',
      cfAExperience: '3 Years',
      minSalary: '$120K',
      picture: Images.images.picture,
      status: 'ACCEPTED',
      isSelected: false,
    },
  ];

  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Your Selection',
    });
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBack
          onBackPress={() => {
            NavigationService.navigate('Username');
          }}
        />
      ),
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
            <YourSelectionCard
              data={item}
              isSelected={item.isSelected}
              onSelected={() => onSelected(item.isSelected)}
              index={index % 2 !== 0}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const preferredCandidates = () => {
    NavigationService.navigate('SetFilters');
    // setShowModal(true);
  };

  const Footer = () => {
    return (
      <View style={styles.buttonStyleView}>
        <AppButton
          title="Short List Crew"
          containerStyle={[styles.buttonStyle]}
          onPress={preferredCandidates}
        />
        <AppButton
          title="Increase Crew Count"
          containerStyle={[
            styles.buttonStyle,
            {
              backgroundColor: Colors.offWhiteColor,
            },
          ]}
          textStyle={{
            color: Colors.secondary,
          }}
          // onPress={preferredCandidates}
        />
      </View>
    );
  };

  const onOkay = () => {
    // NavigationService.navigate('SetFilters');
    // NavigationService.navigate('InterviewSchedule');
  };

  return (
    <MainScreen customScreenStyles={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1}}>
        {LogoTextContainer()}
      </ScrollView>
      {Footer()}
      <SuccessModal
        isVisible={showmodal}
        onBackdropPress={() => setShowModal(false)}
        btnTitle="Okay"
        btnonpress={onOkay}
      />
    </MainScreen>
  );
};

export default YourSelection;
