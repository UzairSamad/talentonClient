import React, {useState, useLayoutEffect, useEffect} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {
  ProjectsCard,
  MainScreen,
  PopupMenu,
  HeaderBack,
  HeaderRightIcon,
} from '../../common';
import styles from './styles';
import {NavigationService} from '../../utils';
import {Images, Metrics} from '../../theme';

const Projects = ({navigation, route}) => {
  const isNavigatedFromFilter = route.params?.isNavigatedFromFilter ?? false;
  const [isSelected, setIsSelected] = useState(false);
  const [showmodal, setShowModal] = useState(false);

  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Projects',
    });
    navigation.setOptions({
      headerLeft: () => <HeaderBack />,
      headerRight: () => <HeaderRightIcon image={Images.icon.home} />,
    });
  }, [navigation]);

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
      isSelected: true,
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
      isSelected: true,
    },
  ];

  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Projects',
    });
  }, [navigation]);

  const onSelected = () => {
    NavigationService.navigate('YourSelection');
    setIsSelected(true);
  };

  const onActice = () => {
    setShowModal(false);
  };

  const LogoTextContainer = () => {
    return (
      <View style={styles.innerConatainer}>
        <FlatList
          data={dataList}
          renderItem={({item, index}) => (
            <ProjectsCard
              data={item}
              onActice={() => onActice(item.isSelected)}
              onSelected={() => onSelected(item.isSelected)}
              lastIndex={dataList?.length - 1}
              index={index % 2 !== 0}
              currentIndex={item.id}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  return (
    <MainScreen
      customScreenStyles={{
        paddingHorizontal: Metrics.ratio(0),
        marginBottom: Metrics.bottomPadding,
      }}>
      {LogoTextContainer()}
    </MainScreen>
  );
};

export default Projects;
