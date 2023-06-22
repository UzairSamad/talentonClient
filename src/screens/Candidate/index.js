import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppButton, CustomCard, MainScreen} from '../../common';
import TextInputNative from '../../components/TextInputNative';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {Colors, Images, Metrics} from '../../theme';
import {useLayoutEffect} from 'react';
import {SuccessModal} from '../../components';

const Candidate = ({navigation}) => {
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
    },
    {
      id: 2,
      name: 'steve Winshester',
      crewDistance: '8 Miles',
      cfAExperience: '3 Years',
      minSalary: '$120K',
      picture: Images.images.picture,
      isSelected: false,
    },
    {
      id: 3,
      name: 'steve Winshester',
      crewDistance: '8 Miles',
      cfAExperience: '3 Years',
      minSalary: '$120K',
      picture: Images.images.picture,
      isSelected: false,
    },
    {
      id: 4,
      name: 'steve Winshester',
      crewDistance: '8 Miles',
      cfAExperience: '3 Years',
      minSalary: '$120K',
      picture: Images.images.picture,
      isSelected: false,
    },
  ];

  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Candidates for Inerview',
    });
  }, [navigation]);

  const onSelected = () => {
    setIsSelected(true);
  };

  const LogoTextContainer = () => {
    return (
      <View style={styles.innerConatainer}>
        {/* <CustomCard data={dataList} /> */}
        <FlatList
          data={dataList}
          renderItem={({item, index}) => (
            <CustomCard
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
          title="Notify Candidates"
          containerStyle={[
            styles.buttonStyle,
            {
              backgroundColor: Colors.greenColor,
            },
          ]}
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
        {Footer()}
      </ScrollView>
      <SuccessModal
        isVisible={showmodal}
        onBackdropPress={() => setShowModal(false)}
        btnTitle="Okay"
        btnonpress={onOkay}
      />
    </MainScreen>
  );
};

export default Candidate;
