import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  CustomSplashScreen,
  SignIn,
  TestingScreen,
  JoinNow,
  Home,
  SelectIndustry,
  Candidate,
  PreferredCandidate,
  ContractGCP,
  Filter,
  SetFilters,
  CandidateCV,
  Checkout,
  AdditionalFilter,
  InterviewSchedule,
  Projects,
  YourSelection,
  SetFilters1,
  SplashScreen1,
  CrewContactSummary,
  CandidatesInterview,
  CrewList,
} from '../screens';
import {NavigationService} from '../utils';
import {screenOptions} from './config';
import BottomTab from './bottom';

const Stack = createStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator {...{screenOptions}}>
      {/* <Stack.Screen name="SetFilters" component={SetFilters} /> */}

      <Stack.Screen
        name="SplashScreen1"
        component={SplashScreen1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CustomSplashScreen"
        component={CustomSplashScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={BottomTab}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="JoinNow" component={JoinNow} />
      <Stack.Screen name="Username" component={Home} />
      <Stack.Screen
        name="SelectIndustry"
        component={SelectIndustry}
        options={{title: 'Select Industry'}}
      />
      <Stack.Screen
        name="Candidate"
        component={Candidate}
        options={{title: 'Candidate'}}
      />
      <Stack.Screen
        name="PreferredCandidate"
        component={PreferredCandidate}
        options={{title: 'Preferred Candidate'}}
      />
      <Stack.Screen
        name="InterviewSchedule"
        component={InterviewSchedule}
        options={{title: 'Interview Schedule'}}
      />
      <Stack.Screen
        name="Contract"
        component={ContractGCP}
        options={{title: 'Contract'}}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{title: 'Filter'}}
      />
      <Stack.Screen
        name="AdditionalFilter"
        component={AdditionalFilter}
        options={{title: 'Additional Filter'}}
      />
      <Stack.Screen name="CrewList" component={CrewList} />
      {/* <Stack.Screen name="SetFilters" component={SetFilters} />
      <Stack.Screen name="SetFilters1" component={SetFilters1} />
      <Stack.Screen name="CandidateCV" component={CandidateCV} />
      <Stack.Screen name="Checkout" component={Checkout} /> */}
      <Stack.Screen
        name="Projects"
        component={Projects}
        options={{title: 'Projects'}}
      />
      <Stack.Screen
        name="YourSelection"
        component={YourSelection}
        options={{title: 'Your Selection'}}
      />
      <Stack.Screen
        name="CandidatesInterview"
        component={CandidatesInterview}
      />
    </Stack.Navigator>
  );
}

const AppContainer = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <StackScreens />
    </NavigationContainer>
  );
};

export default AppContainer;
