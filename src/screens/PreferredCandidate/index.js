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
import CardStack, {Card} from 'react-native-card-stack-swiper';

const PreferredCandidate = ({navigation}) => {
  const [isSelected, setIsSelected] = useState(false);
  const dataList = [
    {
      id: 1,
      name: 'steve Winshester',
      type: 'Full Time',
      number: '+1 470 273 0654',
      email: 'absa@taleno.com',
      picture: Images.images.picture,
      isSelected: true,
    },
    {
      id: 2,
      name: 'steve Winshester',
      type: 'Full Time',
      number: '+1 470 273 0654',
      email: 'absa@taleno.com',
      picture: Images.images.picture,
      isSelected: false,
    },
    {
      id: 3,
      name: 'steve Winshester',
      type: 'Full Time',
      number: '+1 470 273 0654',
      email: 'absa@taleno.com',
      picture: Images.images.picture,
      isSelected: false,
    },
  ];

  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Preferred Candidate',
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
          renderItem={({item}) => (
            <CustomCard
              data={item}
              isSelected={item.isSelected}
              onSelected={() => onSelected(item.isSelected)}
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
  const [swiper, setSwiper] = useState(null)

  return (
    <MainScreen customScreenStyles={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1}}>
        {LogoTextContainer()}
        {Footer()}
      </ScrollView>
    </MainScreen>
  );
};

export default PreferredCandidate;
