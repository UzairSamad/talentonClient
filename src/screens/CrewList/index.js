import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, Text, Touchable, View} from 'react-native';
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

const CrewList = ({navigation, route}) => {
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
    const swipeData = [
      {
        title:
          'Here You Can find a chef or dish for every taste and color. Enjoy!',
        header: 'Find your Comfort Food here',
        swipeImg: Images.images.picture1,
        candidateData: [
          {
            distance: '8 miles',
            city: 'Members',
            totalHours: 11610,
            picHours: 11610,
            typeRatings: `DA-2000, DA-50, BE-1900, CE-560`,
          },
        ],
        type: 'questionaries',
        videoQuestionaries: [
          {
            title: 'Why and when you decided to become a corporate pilot',
            totalHours: '1,50s',
          },
          {
            title: 'What good manners and etiquette mean to you?',
            totalHours: '1,50s',
          },
          {
            title: 'How do you deal with difficult client and colleague ?',
            totalHours: '1,50s',
          },
          {
            title: 'What confidentiality mean to you ?',
            totalHours: '1,50s',
          },
          {
            title: 'Tell me something about you?',
            totalHours: '1,50s',
          },
        ],
      },
      {
        title: 'Enjoy a fast and smooth food delivery at your doorstep',
        header: 'Food Ninja is Where Your Comfort Food Lives',
        swipeImg: Images.images.picture1,
        candidateData: [
          {
            distance: '8 miles',
            city: 'Members',
            totalHours: 11610,
            picHours: 11610,
            typeRatings: `DA-2000, DA-50, BE-1900, CE-560`,
          },
        ],
        type: 'candidate',
        videoQuestionaries: [
          {
            title: 'Why and when you decided to become a corporate pilot',
            totalHours: '1,50s',
          },
          {
            title: 'What good manners and etiquette mean to you?',
            totalHours: '1,50s',
          },
          {
            title: 'How do you deal with difficult client and colleague ?',
            totalHours: '1,50s',
          },
          {
            title: 'What confidentiality mean to you ?',
            totalHours: '1,50s',
          },
          {
            title: 'Tell me something about you?',
            totalHours: '1,50s',
          },
        ],
      },
      {
        title: 'Enjoy a fast and smooth food delivery at your doorstep',
        header: 'Food Ninja is Where Your Comfort Food Lives',
        swipeImg: Images.images.picture1,
        candidateData: [
          {
            distance: '8 miles',
            city: 'Members',
            totalHours: 11610,
            picHours: 11610,
            typeRatings: `DA-2000, DA-50, BE-1900, CE-560`,
          },
        ],
        type: 'questionaries',
        videoQuestionaries: [
          {
            title: 'Why and when you decided to become a corporate pilot',
            totalHours: '1,50s',
          },
          {
            title: 'What good manners and etiquette mean to you?',
            totalHours: '1,50s',
          },
          {
            title: 'How do you deal with difficult client and colleague ?',
            totalHours: '1,50s',
          },
          {
            title: 'What confidentiality mean to you ?',
            totalHours: '1,50s',
          },
          {
            title: 'Tell me something about you?',
            totalHours: '1,50s',
          },
        ],
      },
    ];
    setSwipeItem(swipeData);
  }, []);

  const onSwipedLeft = props => {
    console.log('props', props);
    setIsSwipedLeftCard(props + 1);
    setIsSwipedLeft(true);
  };

  const onSwipedRight = () => {
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
    <View styl={{flex: 1}}>
      <View
        style={{
          backgroundColor: Colors.darkBlueColor,
          width: '100%',
          height: Util.isPlatformIOS()
            ? Metrics.screenHeight * 0.11
            : Metrics.screenHeight * 0.12,
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
      <MainScreen
        customScreenStyles={{
          paddingHorizontal: 0,
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: Colors.darkBlueColor,
              height: 40,
              top: 0,
              bottom: 0,
            }}
          />
          <View style={{position: 'absolute', top: 0, alignSelf: 'center'}}>
            <SwiperView
              onSwipedLeft={onSwipedLeft}
              onSwipedRight={onSwipedRight}
              swipeItem={swipeItem}
              isSwipedRight={isSwipedRight}
              isSwipedLeft={isSwipedLeft}
            />
          </View>
        </View>

        <CrewAddModal
          isVisible={showmodal}
          onBackdropPress={() => setShowModal(false)}
          btnTitle="Okay"
          btnonpress={onOkay}
        />
      </MainScreen>
    </View>
  );
};

export default CrewList;
