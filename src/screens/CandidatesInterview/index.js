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
  CandidatesInterviewCard,
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

const CandidatesInterview = ({navigation}) => {
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
      title: 'Candidates for Interview',
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
            <CandidatesInterviewCard
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
    setShowModal(true);
  };

  const Footer = () => {
    return (
      <View style={styles.buttonStyleView}>
        <AppButton
          title="Notify Candidate"
          containerStyle={[
            styles.buttonStyle,
            {
              backgroundColor: Colors.greenColor,
              width: Metrics.ratio(250),
              height: Metrics.ratio(40),
            },
          ]}
          textStyle={{
            color: Colors.white,
          }}
          onPress={preferredCandidates}
        />
      </View>
    );
  };

  const onOkay = () => {
    NavigationService.navigate('InterviewSchedule');
    setShowModal(false);
  };

  return (
    <MainScreen customScreenStyles={styles.container}>
      <ScrollView
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

export default CandidatesInterview;
