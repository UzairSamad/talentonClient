/** @format */

import React from 'react';
import {View, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import {DataHandler, Util} from '../../utils';
import {styles} from './styles';
import {
  BookingStack,
  ContactStack,
  ContractStack,
  CrewListStack,
  FreelanceCrewStack,
  FreelanceHomeStack,
  MoreStack,
  NotificationStack,
  ProfileStack,
  ShortListStack,
  // ProfileStackFreelancer,
} from './Stacks';
import {Home, SetFilters} from '../../screens';

const navigationItemsFreelancer = [
  {
    label: 'Project',
    icon: Images.icon.img3,
    component: BookingStack,
    customIconStyles: {},
  },
  {
    label: 'Profile',
    icon: Images.icon.img1,
    component: ProfileStack,
    customIconStyles: {height: 30, width: 30},
  },
  {
    label: 'Notifications',
    icon: Images.icon.img2,
    component: NotificationStack,
    customIconStyles: {},
  },
  {
    label: 'Contact',
    icon: Images.icon.img4,
    component: ContractStack,
    customIconStyles: {},
  },
  {
    label: 'Short List',
    icon: Images.icon.img5,
    component: ShortListStack,
    customIconStyles: {},
  },
  {
    label: 'More',
    icon: Images.icon.img,
    component: MoreStack,
    customIconStyles: {},
  },
];

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={DataHandler.getInititalRouteNameForBottomTab()}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.darkYellowColor,
        tabBarStyle: {
          height: Util.isPlatformIOS()
            ? Metrics.screenHeight * 0.12
            : Metrics.ratio(90),
        },
      }}>
      {navigationItemsFreelancer.map(
        ({label, icon, component, customIconStyles}) => {
          return (
            <Tab.Screen
              name={label}
              component={component}
              options={{
                headerShown: false,
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <>
                      {label == 'Short List' && (
                        <View
                          style={{
                            position: 'absolute',
                            zIndex: 1,
                            top: 5,
                            left: 40,
                          }}>
                          <Text
                            style={{
                              fontSize: Fonts.size.size_12,
                              color: Colors.darkYellowColor,
                            }}>
                            1/2
                          </Text>
                        </View>
                      )}
                      <Image
                        source={icon}
                        resizeMode="contain"
                        style={[
                          styles.icon,
                          {tintColor: Colors.darkYellowColor},
                          customIconStyles,
                        ]}
                      />
                    </>
                  ) : (
                    <>
                      {label == 'Short List' && (
                        <View
                          style={{
                            position: 'absolute',
                            zIndex: 1,
                            top: 5,
                            left: 40,
                          }}>
                          <Text
                            style={{
                              fontSize: Fonts.size.size_12,
                              color: Colors.darkBlueColor,
                            }}>
                            1/2
                          </Text>
                        </View>
                      )}
                      <Image
                        source={icon}
                        resizeMode="contain"
                        style={[styles.icon, customIconStyles]}
                      />
                    </>
                  ),
                tabBarLabelStyle: {...styles.labelFont},
              }}
            />
          );
        },
      )}
    </Tab.Navigator>
  );
}
