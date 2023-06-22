import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import {CandidateCard, MainScreen, QuestionariesCard} from '../../common';
import {NavigationService} from '../../utils';

const SwiperView = ({
  onSwipedLeft,
  onSwipedRight,
  swipeItem,
  isSwipedLeft,
  isSwipedRight,
  isQuestionaries,
}) => {
  const handleSwipeGesture = () => {
    // Custom logic to handle the swipe gesture
  };

  return (
    <CardStack
      verticalSwipe={false}
      style={styles.content}
      disableBottomSwipe
      disableTopSwipe
      onSwipedLeft={onSwipedLeft}
      onSwipedRight={onSwipedRight}
      onSwipedBottom={() => console.log('Swiped down')}
      panHandlers={{
        onStartShouldSetResponder: () => true, // Enable responding to touch events
        onMoveShouldSetResponder: () => true, // Enable responding to move events
        onResponderMove: () => {}, // Handle move events (empty function as placeholder)
        onResponderRelease: handleSwipeGesture, // Handle release event
      }}>
      {swipeItem?.map((item, index) => {
        return (
          <Card
            key={index}
            style={[styles.card]}
            disableLeftSwipe={isSwipedLeft}
            disableRightSwipe={isSwipedRight}>
            <View>
              <View style={styles.slide1}>
                <Image
                  style={[
                    styles.img,
                    {
                      marginTop: isQuestionaries ? 0 : -21,
                    },
                  ]}
                  source={item?.swipeImg}
                />

                <View
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      marginHorizontal: Metrics.ratio(30),
                      // position: 'absolute',
                      bottom: isQuestionaries
                        ? Metrics.ratio(80)
                        : Metrics.ratio(100),
                    },
                  ]}>
                  <Image style={[styles.box]} source={Images?.icon.cross} />
                  <Image
                    style={[
                      styles.box,
                      {
                        marginHorizontal: Metrics.ratio(40),
                      },
                    ]}
                    source={Images?.icon.tick}
                  />
                  <TouchableOpacity
                  // onPress={() => NavigationService.navigate('CrewList')}
                  >
                    <Image style={styles.box} source={Images?.icon.thinkFace} />
                  </TouchableOpacity>
                </View>
                <ImageBackground
                  source={Images.images.appBg}
                  style={[
                    {
                      // minHeight: Metrics.screenHeight - 100,
                    },
                  ]}>
                  <View style={[styles.row, styles.headerContainer]}>
                    <View style={styles.column}>
                      <Text style={styles.headerText}>{'Candidate 333P'}</Text>
                      <Image
                        style={styles.stars}
                        source={Images?.icon?.stars}
                      />
                    </View>
                    <View style={styles.row}>
                      <TouchableOpacity
                        onPress={() => {
                          NavigationService.navigate('SetFilters1');
                        }}>
                        <Image
                          style={styles.video}
                          source={Images?.icon?.video}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          // NavigationService.navigate(
                          //   isQuestionaries ? 'CandidateCV' : 'SetFilters1',
                          // );
                          NavigationService.navigate('CandidateCV');
                        }}>
                        <Image
                          style={styles.info}
                          source={Images?.icon?.info}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
            {!isQuestionaries && (
              <View style={styles.container}>
                {item?.candidateData?.map(candidateDatas => {
                  return (
                    <View>
                      <CandidateCard
                        distance={candidateDatas?.distance}
                        city={candidateDatas?.city}
                        totalHours={candidateDatas?.totalHours}
                        picHours={candidateDatas?.picHours}
                        typeRatings={candidateDatas?.typeRatings}
                      />
                    </View>
                  );
                })}
              </View>
            )}
            {isQuestionaries && (
              <View style={styles.container}>
                {item?.videoQuestionaries?.map((videoQuestionarie, index) => {
                  return (
                    <View>
                      <QuestionariesCard
                        title={videoQuestionarie?.title}
                        totalHours={videoQuestionarie?.totalHours}
                        index={index}
                        lastIndex={item?.videoQuestionaries.length - 1}
                      />
                    </View>
                  );
                })}
              </View>
            )}
          </Card>
        );
      })}
    </CardStack>
  );
};

export default SwiperView;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Metrics.ratio(38),
    width: '100%',
  },
  card: {
    marginVertical: 0,
    // backgroundColor: Colors.greyLighter,
  },
  img: {
    resizeMode: 'cover',
    width: Metrics.ratio(350),
    height: Metrics.ratio(300),
    borderRadius: Metrics.ratio(10),
    borderColor: Colors.darkBlueColor,
    borderWidth: 2,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: Metrics.ratio(0),
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  box: {
    resizeMode: 'cover',
    width: Metrics.ratio(48),
    height: Metrics.ratio(45),
    borderWidth: 1,
    borderColor: Colors.darkYellowColor,
    borderRadius: Metrics.ratio(7),
    marginHorizontal: Metrics.ratio(10),
  },
  stars: {
    resizeMode: 'cover',
    width: Metrics.ratio(35),
    height: Metrics.ratio(10),
  },
  video: {
    resizeMode: 'cover',
    width: Metrics.ratio(42),
    height: Metrics.ratio(34),
  },
  info: {
    resizeMode: 'cover',
    width: Metrics.ratio(28),
    height: Metrics.ratio(34),
    marginLeft: Metrics.ratio(10),
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Metrics.ratio(10),
    marginHorizontal: Metrics.ratio(5),
  },
  headerText: {
    color: Colors.secondary,
    fontSize: Fonts.size.size_21,
    fontFamily: Fonts.type.regular,
  },
  container: {
    borderWidth: 1,
    borderColor: Colors.darkBlueColor,
    borderRadius: Metrics.ratio(10),
    paddingVertical: Metrics.ratio(20),
    paddingHorizontal: Metrics.ratio(25),
    backgroundColor: Colors.white,
  },
});
