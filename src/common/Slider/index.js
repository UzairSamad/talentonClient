import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {THUMB} from '../../assets/icon/thumbIcon/thumbIcon.png';

const index = props => {
  const {sliderStyle, setMinAgePreference} = props;
  return (
    <View>
      <Slider
        style={[{width: 220}, sliderStyle]}
        minimumValue={0}
        maximumValue={10000}
        minimumTrackTintColor="#1D3C54"
        maximumTrackTintColor="black"
        thumbImage={THUMB}
        onValueChange={setMinAgePreference}
        thumbStyle={{width: 15, height: 15}}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
