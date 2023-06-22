import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {
  AppButton,
  CandidateCard,
  HeaderBack,
  HeaderRightIcon,
  MainScreen,
} from '../../common';
import {ButtonView, SwiperView} from '../../components';
import TextInputNative from '../../components/TextInputNative';
import {NavigationService, Util} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {Colors, Images, Metrics} from '../../theme';

const SetFilters1 = ({navigation, route}) => {
  const [isSwipedLeft, setIsSwipedLeft] = useState(false);
  const [isSwipedRight, setIsSwipedRight] = useState(false);
  const [swipeItem, setSwipeItem] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerLeft: () => <HeaderBack />,
      headerRight: () => (
        <HeaderRightIcon
          isVectorIcon={false}
          customImageStyle={styles.customImageStyle}
          image={Images.icon.settings}
          onPress={() => {
            NavigationService.navigate('AdditionalFilter');
          }}
        />
      ),
    });
  }, [navigation]);

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
  const onSwipedLeft = () => {
    setIsSwipedLeft(true);
  };

  const onSwipedRight = () => {
    setIsSwipedRight(true);
  };

  useEffect(() => {
    setIsSwipedLeft(false);
    setIsSwipedRight(false);
  }, []);

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
          top: -30,
        }}>
        <SwiperView
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={onSwipedRight}
          swipeItem={swipeItem}
          isSwipedRight={isSwipedRight}
          isSwipedLeft={isSwipedLeft}
          isQuestionaries={true}
        />
      </View>
    </MainScreen>
  );
};

export default SetFilters1;
