import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, ScrollView, Text, Touchable, View} from 'react-native';
import {
  AppButton,
  CandidateCard,
  HeaderBack,
  HeaderRightIcon,
  MainScreen,
} from '../../common';
import {ButtonView, CrewAddModal, SwiperView} from '../../components';
import TextInputNative from '../../components/TextInputNative';
import {NavigationService, Util} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {Colors, Images, Metrics} from '../../theme';
import HeaderCustomTitle from '../../common/HeaderCustomTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {swipeData} from '../../config/dummyData';

const SetFilters = ({navigation, route}) => {
  const [isSwipedLeft, setIsSwipedLeft] = useState(false);
  const [isSwipedLeftCard, setIsSwipedLeftCard] = useState(null);
  const [isSwipedRight, setIsSwipedRight] = useState(false);
  const [swipeItem, setSwipeItem] = useState([]);
  const [showmodal, setShowModal] = useState(false);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => <HeaderBack />,
  //     headerRight: () => (
  //       <HeaderRightIcon
  //         isVectorIcon={false}
  //         customImageStyle={styles.customImageStyle}
  //         image={Images.icon.settings}
  //         onPress={() => {
  //           NavigationService.navigate('AdditionalFilter');
  //         }}
  //       />
  //     ),
  //   });
  // }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerLeft: () => <HeaderBack />,
      headerRight: () => (
        <HeaderRightIcon
          onPress={() => NavigationService.navigate('Filter')}
          isVectorIcon={false}
          image={Images.icon.settings}
          customImageStyle={{
            width: Metrics.ratio(25),
            height: Metrics.ratio(25),
            resizeMode: 'contain',
            marginTop: Metrics.ratio(25),
          }}
        />
      ),
      headerTitle: () => (
        <HeaderCustomTitle
          showFilterIcon={false}
          title={``}
          customContainerStyle={{marginLeft: Metrics.ratio(10)}}
          onPress={() =>
            NavigationService.navigate('AdditionalFilter', {
              isSectionNavigate: false,
            })
          }
        />
      ),
    });
  });

  useEffect(() => {
    setSwipeItem(swipeData);
  }, []);

  const onSwipedLeft = props => {
    console.log('props', props);
    setIsSwipedLeftCard(props + 1);
    setIsSwipedLeft(true);
  };

  const onSwipedRight = props => {
    setIsSwipedLeftCard(props + 1);
    setIsSwipedRight(true);
  };

  useEffect(() => {
    setIsSwipedLeft(false);
    setIsSwipedRight(false);
  }, []);

  useEffect(() => {
    if (isSwipedLeftCard === 2) {
      setShowModal(true);
    }
  }, [isSwipedLeftCard]);

  const onOkay = () => {
    setShowModal(false);
    NavigationService.navigate('CandidatesInterview');
  };

  return (
    <MainScreen
      customScreenStyles={{
        paddingHorizontal: 0,
      }}>
      <View
        style={{
          backgroundColor: Colors.darkBlueColor,
          width: '100%',
          height: Util.isPlatformIOS()
            ? Metrics.screenHeight * 0.13
            : Metrics.screenHeight * 0.12,
          paddingTop: Metrics.ratio(10),
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: Metrics.ratio(10),
          }}>
          <HeaderBack />
          <Image
            style={{
              height: Metrics.ratio(33),
              width: Metrics.ratio(47),
              marginRight: Metrics.ratio(26),
              alignSelf: 'center',
            }}
            source={Images.images.headerIcon}
            resizeMode="contain"
          />
          <HeaderRightIcon />
        </View>
      </View>

      <View
        style={{
          backgroundColor: Colors.darkBlueColor,
          height: 40,
          top: 0,
          bottom: 0,
        }}
      />
      <View
        style={{
          height: Metrics.screenHeight,
          top: -20,
        }}>
        <SwiperView
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={onSwipedRight}
          swipeItem={swipeItem}
          isSwipedRight={isSwipedRight}
          isSwipedLeft={isSwipedLeft}
        />
      </View>

      <CrewAddModal
        isVisible={showmodal}
        onBackdropPress={() => setShowModal(false)}
        btnTitle="Okay"
        btnonpress={onOkay}
      />
    </MainScreen>
  );
};

export default SetFilters;
