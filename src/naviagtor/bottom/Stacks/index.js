/** @format */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  Booking,
  Contact,
  CrewList,
  Projects,
  More,
  Profile,
  LetsFilter,
  FreelancerHomeTwo,
  FreelancerHomeThree,
  FreelanceHomeStepFour,
  FreelanceHomeStepFive,
  ContractGCP,
  CrewContactSummary,
  CrewContactSummaryFreelancer,
  SetFilters,
  Notifications,
  SetFilters1,
  CandidateCV,
  Checkout,
  EditProfile,
} from '../../../screens';
import {screenOptions} from '../../config';
// import FreelancerHome from '../../../screens/FreelancerHome';
const Stack = createStackNavigator();
function BookingStack() {
  return (
    <Stack.Navigator {...{screenOptions}}>
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="SetFilters" component={SetFilters} />
    </Stack.Navigator>
  );
}
function CrewStack() {
  return (
    <Stack.Navigator {...{screenOptions}}>
      <Stack.Screen name="SetFilters" component={SetFilters} />
      <Stack.Screen name="SetFilters1" component={SetFilters1} />
      <Stack.Screen name="CandidateCV" component={CandidateCV} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}
function ShortListStack() {
  return (
    <Stack.Navigator {...{screenOptions}}>
      <Stack.Screen name="SetFilters" component={SetFilters} />
      <Stack.Screen name="SetFilters1" component={SetFilters1} />
      <Stack.Screen name="CandidateCV" component={CandidateCV} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}
function MoreStack() {
  return (
    <Stack.Navigator {...{screenOptions}}>
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
}

function ContractStack() {
  return (
    <Stack.Navigator {...{screenOptions}}>
      <Stack.Screen name="ContractGCPStack" component={ContractGCP} />
    </Stack.Navigator>
  );
}
function NotificationStack() {
  return (
    <Stack.Navigator {...{screenOptions}}>
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator {...{screenOptions}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export {
  BookingStack,
  ShortListStack,
  MoreStack,
  ContractStack,
  NotificationStack,
  ProfileStack,
  CrewStack,
};
