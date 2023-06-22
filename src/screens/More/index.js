import React, {useLayoutEffect, useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Image, Alert} from 'react-native';
import {HeaderBack, HeaderRightIcon, MainScreen} from '../../common';
import {Colors, Images, Metrics} from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ButtonView} from '../../components';
import {NavigationService} from '../../utils';

const More = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setParams({
      title: 'More',
    });
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBack />,
      headerRight: () => <HeaderRightIcon image={Images.icon.home} />,
    });
  }, []);

  const [state1, setstate1] = useState(false);
  const [state2, setstate2] = useState(false);
  // const dispatch = useDispatch();

  const onsubmit = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout ?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Yes',
          onPress: () => NavigationService.navigate('SignIn'),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <MainScreen customScreenStyles={{paddingHorizontal: 0}}>
      <FlatList
        data={[1]}
        renderItem={() => {
          return (
            <View style={{marginTop: 15}}>
              <ButtonView style={styles.child_1}>
                <View style={styles.child_2}>
                  <Image
                    source={Images.icon.headerIcon}
                    resizeMode="center"
                    style={styles.logo}
                  />
                  <Text style={styles.heading}>Talent On</Text>
                  <Text style={[styles.heading1, {color: Colors.secondary}]}>
                    Travel Assistance
                  </Text>
                </View>
              </ButtonView>

              <ButtonView style={styles.child_1}>
                <View style={styles.child_2}>
                  <Image
                    source={Images.icon.headerIcon}
                    resizeMode="center"
                    style={styles.logo}
                  />
                  <Text style={styles.heading}>Talent On</Text>
                  <Text style={[styles.heading1, {color: Colors.secondary}]}>
                    Personal Assistance
                  </Text>
                </View>
              </ButtonView>

              <ButtonView style={styles.child_1}>
                <View style={styles.child_2}>
                  <Image
                    source={Images.icon.headerIcon}
                    resizeMode="center"
                    style={styles.logo}
                  />
                  <Text style={[styles.heading1, {color: Colors.secondary}]}>
                    Setting
                  </Text>
                </View>
              </ButtonView>

              <ButtonView style={styles.child_1}>
                <View style={styles.child_2}>
                  <Image
                    source={Images.icon.headerIcon}
                    resizeMode="center"
                    style={styles.logo}
                  />
                  <Text style={[styles.heading1, {color: Colors.secondary}]}>
                    Bill Payments
                  </Text>
                </View>
              </ButtonView>

              <ButtonView style={styles.child_1}>
                <View style={styles.child_2}>
                  <Image
                    source={Images.icon.headerIcon}
                    resizeMode="center"
                    style={styles.logo}
                  />
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.heading1, {color: Colors.secondary}]}>
                      Free lance
                    </Text>
                    <AntDesign
                      style={{marginLeft: 10}}
                      name="minus"
                      size={15}
                      color="#B50404"
                    />
                  </View>
                </View>
              </ButtonView>

              <ButtonView
                onPress={() => setstate1(!state1)}
                style={styles.child_1}>
                <View style={styles.child_2}>
                  <Image
                    source={Images.icon.headerIcon}
                    resizeMode="center"
                    style={styles.logo}
                  />
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.heading1, {color: Colors.secondary}]}>
                      Full Time{' '}
                    </Text>
                    <AntDesign
                      style={{marginLeft: 10}}
                      name="plus"
                      size={15}
                      color="#B50404"
                    />
                  </View>
                </View>
              </ButtonView>
              {state1 && (
                <ButtonView
                  onPress={() => {
                    navigation.navigate('ContactCrew');
                  }}
                  style={{margin: 10, marginLeft: 30}}>
                  <Text style={[styles.heading1, {color: Colors.secondary}]}>
                    Interview
                  </Text>
                </ButtonView>
              )}
              <ButtonView
                onPress={() => setstate2(!state2)}
                style={styles.child_1}>
                <View style={styles.child_2}>
                  <Image
                    source={Images.icon.headerIcon}
                    resizeMode="center"
                    style={styles.logo}
                  />
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.heading1, {color: Colors.secondary}]}>
                      Crew contact
                    </Text>
                    <AntDesign
                      style={{marginLeft: 10}}
                      name="plus"
                      size={15}
                      color="#B50404"
                    />
                  </View>
                </View>
              </ButtonView>
              {state2 && (
                <ButtonView
                  onPress={() => {
                    navigation.navigate('');
                  }}
                  style={{margin: 10, marginLeft: 30}}>
                  <Text style={[styles.heading1, {color: Colors.secondary}]}>
                    Documents
                  </Text>
                </ButtonView>
              )}

              <ButtonView onPress={() => onsubmit()} style={styles.child_1}>
                <View style={styles.child_2}>
                  <Image
                    source={Images.icon.headerIcon}
                    resizeMode="center"
                    style={styles.logo}
                  />
                  <Text style={[styles.heading1, {color: Colors.secondary}]}>
                    Logout
                  </Text>
                </View>
              </ButtonView>
            </View>
          );
        }}
      />
    </MainScreen>
  );
};

export default More;

const styles = StyleSheet.create({
  child_1: {
    flexDirection: 'row',
    marginVertical: Metrics.ratio(8),
    marginHorizontal: Metrics.ratio(15),
  },
  child_2: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.darkYellowColor,
    width: '100%',
    paddingVertical: 6,
  },
  logo: {
    marginRight: 10,
  },
  heading: {fontWeight: 'bold', color: Colors.darkBlueColor, marginRight: 5},
});
