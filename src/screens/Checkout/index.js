import React, {useLayoutEffect} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {
  AppButton,
  HeaderBack,
  HeaderRightIcon,
  MainScreen,
  Slider,
} from '../../common';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {Colors, Images, Metrics} from '../../theme';
import {NavigationService} from '../../utils';

const Checkout = ({navigation}) => {
  const {width, height} = Dimensions.get('screen');
  const [formObj] = useHookForm([], {}, ValidationSchema.checkout);

  const submit = formObj.handleSubmit(values => {
    // NavigationService.navigate('');
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBack />,
      headerRight: () => <HeaderRightIcon />,
    });
  }, [navigation]);

  return (
    <MainScreen customScreenStyles={styles.main}>
      <View
        style={{
          backgroundColor: Colors.darkBlueColor,
          height: Metrics.ratio(30),
          position: 'absolute',
          top: 0,
          width: '100%',
        }}
      />
      <View
        style={{
          marginTop: -Metrics.ratio(100),
          paddingHorizontal: Metrics.ratio(38),
        }}>
        <Image source={Images.images.picture1} style={styles.img} />
        <Slider
          sliderStyle={[{width: width * 0.8}, styles.slider]}
          setMinAgePreference={0}
        />
        <TouchableOpacity
          style={styles.XBtn}
          onPress={() => {
            NavigationService.navigate('SetFilters1');
          }}>
          <Image source={Images.icon.X} style={styles.X} />
        </TouchableOpacity>
        <Text style={styles.text}>
          {'What drive you to be a pilot on private jet?'}
        </Text>
        <AppButton
          title={'Check Out'}
          containerStyle={styles.buttonStyle}
          onPress={submit}
          textStyle={styles.buttonStyleText}
        />
      </View>
    </MainScreen>
  );
};

export default Checkout;
