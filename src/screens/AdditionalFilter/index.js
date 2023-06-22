import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  HeaderBack,
  HeaderRightIcon,
  Switch,
  AppButton,
  Slider,
  MainScreen,
} from '../../common';
import {
  ButtonView,
  CustomCheckBox,
  CustomDatePicker,
  CustomDropDown,
} from '../../components';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import styles from './styles';
import {NavigationService} from '../../utils';
import TextInputNative from '../../components/TextInputNative';
import {ValidationSchema, useHookForm} from '../../utils/ValidationUtil';

const {width, height} = Dimensions.get('screen');

const AdditionalFilter = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Additional Filter',
    });
    navigation.setOptions({
      headerLeft: () => <HeaderBack />,
      headerRight: () => (
        <View>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                marginTop: Metrics.ratio(30),
                paddingRight: Metrics.scaleHorizontal(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ButtonView
                // onPress={() => onPress()}
                style={{alignSelf: 'flex-end'}}>
                <Image
                  style={{height: 20}}
                  resizeMode="contain"
                  source={Images.icon.reset}
                />
              </ButtonView>
              <Text
                style={{
                  color: Colors.white,
                }}>
                Reset All
              </Text>
            </View>
          </View>
        </View>
      ),
    });
  }, [navigation]);

  const [formObj, countryProps, minimumProps, maximumProps] = useHookForm(
    ['country', 'minimum', 'maximum'],
    {},
    ValidationSchema.filter,
  );

  const [datePickerStart, setDatePickerStart] = useState(false);
  const [dateStart, setDateStart] = useState(null);
  const [minhours, setminhours] = useState();
  const [relocatedswitch, setrelocatedswitch] = useState();
  const [position, setposition] = useState();
  const [sic, setSic] = useState(false);
  const [hours, setHours] = useState('');
  const [flightVny, setFlightVnyy] = useState([0]);
  const [flightPic, setFlightPic] = useState([0]);
  const [flightSic, setFlightSic] = useState([0]);
  const [flightMultiEng, setFlightMultiEng] = useState([0]);
  const [flightMultiEng2, setFlightMultiEng2] = useState([0]);
  const [airCraftMin, setAirCraftMin] = useState([0]);
  const [dropdownValue, setDropdownValue] = useState('');

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];
  const data = [
    {
      title: 'FLIGHT EXPERIENCE MIN HRS',
      type: 'textHeader',
      isLeft: false,
    },
    {
      title: 'TURBO PROP.',
      type: 'switch',
      value: relocatedswitch,
      onChange: setrelocatedswitch,
      isEnabled: true,
    },
    {
      title: 'JET',
      type: 'switch',
      value: relocatedswitch,
      onChange: setrelocatedswitch,
      isEnabled: true,
    },
    {
      title: 'X-COUNTRY',
      type: 'switch',
      value: relocatedswitch,
      onChange: setrelocatedswitch,
      isEnabled: true,
    },
    {
      title: 'NIGHT-CURRENT',
      type: 'switch',
      value: relocatedswitch,
      onChange: setrelocatedswitch,
      isEnabled: true,
    },
    {
      title: 'IFR',
      type: 'switch',
      value: position,
      onChange: setposition,
      isEnabled: true,
    },
    {
      type: 'line',
    },
    {
      title: 'VALID LICENCES',
      type: 'textHeader',
      isLeft: false,
    },
    {
      checkboxName: 'ATPL',
      type: 'checkbox',
      Checked: parseInt(flightMultiEng2),
      onPress: setFlightMultiEng2,
    },
    {
      checkboxName: 'CPL',
      type: 'checkbox',
      Checked: parseInt(flightMultiEng2),
      onPress: setFlightMultiEng2,
    },
    {
      checkboxName: 'ASEL',
      type: 'checkbox',
      Checked: parseInt(flightMultiEng2),
      onPress: setFlightMultiEng2,
    },
    {
      checkboxName: 'CFI',
      type: 'checkbox',
      Checked: parseInt(flightMultiEng2),
      onPress: setFlightMultiEng2,
    },
    {
      checkboxName: 'FCC',
      type: 'checkbox',
      Checked: parseInt(flightMultiEng2),
      onPress: setFlightMultiEng2,
    },
    {
      checkboxName: 'MEI',
      type: 'checkbox',
      Checked: parseInt(flightMultiEng2),
      onPress: setFlightMultiEng2,
    },
    {
      checkboxName: 'VALID DEGREE EMBRY RIDDLE',
      type: 'checkbox',
      Checked: parseInt(flightMultiEng2),
      onPress: setFlightMultiEng2,
    },
    {
      checkboxName: 'OTHER',
      type: 'checkbox',
      Checked: parseInt(flightMultiEng2),
      onPress: setFlightMultiEng2,
    },
    {
      checkboxName: 'MEDICAL RESTRICTION',
      type: 'checkbox',
      Checked: flightMultiEng,
      onPress: setFlightMultiEng,
    },
    {
      checkboxName: 'ACCIDENT',
      type: 'checkbox',
      Checked: flightMultiEng,
      onPress: setFlightMultiEng,
    },
    {
      checkboxName: 'INSTRUMENTS CURRENTS',
      type: 'checkbox',
      Checked: flightMultiEng,
      onPress: setFlightMultiEng,
    },
    {
      checkboxName: 'ABLE TRAVEL INTERNATIONALLY',
      type: 'checkbox',
      Checked: parseInt(flightMultiEng2),
      onPress: setFlightMultiEng2,
    },
    {
      type: 'line',
    },
    {
      title: 'TRAINING SCHOOL',
      type: 'textHeader',
      isLeft: false,
    },
    {
      title: 'Names',
      type: 'dropDown',
      placeholder: 'Multi Options',
      onChangeText: handleDropDownChange,
      value: dropdownValue,
      options: dropdownOptions,
    },
    {
      title: 'Last Training Date',
      datePickertitle: 'MM/YY/DD',
      type: 'datePicker',
      date: dateStart,
      datePicker: datePickerStart,
      onDateSelected: onDateSelected,
      showDatePicker: showDatePicker,
    },
    {
      type: 'line',
    },
    {
      title: 'VALID TRAVEL PERMIT',
      type: 'textHeader',
      isLeft: false,
    },
    {
      title: 'VISA',
      type: 'dropDown',
      placeholder: 'Multi Options',
      onChangeText: handleDropDownChange,
      value: dropdownValue,
      options: dropdownOptions,
    },
    {
      title: 'Expiration Date',
      datePickertitle: 'MM/YY/DD',
      type: 'datePicker',
      date: dateStart,
      datePicker: datePickerStart,
      onDateSelected: onDateSelected,
      showDatePicker: showDatePicker,
    },
    {
      title: '+',
      type: 'buttonPlus',
      onPress: () => NavigationService.navigate('MoreFlter', 'LICENSES'),
    },
    {
      title: 'PASSPORT',
      type: 'dropDown',
      placeholder: 'Multi Options',
      onChangeText: handleDropDownChange,
      value: dropdownValue,
      options: dropdownOptions,
    },
    {
      title: 'Expiration Dates',
      datePickertitle: 'MM/YY/DD',
      type: 'datePicker',
      date: dateStart,
      datePicker: datePickerStart,
      onDateSelected: onDateSelected,
      showDatePicker: showDatePicker,
    },
    {
      title: '+',
      type: 'buttonPlus',
      onPress: () => NavigationService.navigate('MoreFlter', 'LICENSES'),
    },
    {
      type: 'line',
    },
    {
      title: 'FORMER BACKGROUND',
      type: 'textHeader',
      isLeft: false,
    },
    {
      title: 'AIRLINE CREW FROM',
      type: 'dropDown',
      placeholder: 'Multi Options',
      onChangeText: handleDropDownChange,
      value: dropdownValue,
      options: dropdownOptions,
    },
    {
      title: 'BUSINESS CREW FROM',
      type: 'dropDown',
      placeholder: 'Multi Options',
      onChangeText: handleDropDownChange,
      value: dropdownValue,
      options: dropdownOptions,
    },
    {
      type: 'line',
    },
    {
      title: 'HOBBY',
      type: 'textHeader',
      isLeft: false,
    },
    {
      title: 'STAND BY HOBBY',
      type: 'dropDown',
      placeholder: 'Multi Options',
      onChangeText: handleDropDownChange,
      value: dropdownValue,
      options: dropdownOptions,
    },
  ];

  const handleDropDownChange = value => {
    setDropdownValue(value);
  };

  function showDatePicker() {
    setDatePickerStart(true);
  }

  function onDateSelected(event, value) {
    setDateStart(value);
    setDatePickerStart(false);
  }

  return (
    <MainScreen>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.mainFlexView}>
              {item?.type === 'textHeader' && (
                <View style={styles.HeadingView}>
                  <Image
                    source={Images.icon.PlusSquare}
                    style={styles.PlusSquare}
                  />
                  <Text
                    style={[
                      styles.Heading,
                      {
                        width: item?.isLeft ? '90%' : null,
                      },
                    ]}>
                    {item?.title}
                  </Text>
                  {item?.isLeft && (
                    <Image source={Images.icon.close} style={styles.close} />
                  )}
                </View>
              )}
              {item?.type === 'textSubHeader' && (
                <Text style={styles.subHeading}>{item?.title}</Text>
              )}
              {item?.type === 'sliderHeader' && (
                <View style={{marginVertical: Metrics.scaleVertical(10)}}>
                  <Text style={styles.Heading2}>{item?.title}</Text>
                  <View style={styles.childFlexView}>
                    <Text style={styles.Heading1}>{item?.sliderName}</Text>
                    <Slider
                      sliderStyle={{width: width * 0.59}}
                      setMinAgePreference={item?.setMinAgePreference}
                    />
                    <Text style={styles.value_text}>{item.value}</Text>
                  </View>
                </View>
              )}
              {item?.type === 'switch' && (
                <View style={[styles.switchView]}>
                  <Text style={styles.Heading2}>{item?.title}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {item?.isEnabled ? (
                      <TextInput
                        editable
                        onChangeText={setHours}
                        value={hours}
                        placeholder={'Type hours min'}
                        placeholderTextColor={Colors.secondary}
                        style={{
                          backgroundColor: Colors.InputBackground,
                          width: Metrics.ratio(100),
                          paddingLeft: Metrics.ratio(20),
                          marginRight: Metrics.ratio(20),
                          borderRadius: Metrics.ratio(20),
                          height: 30,
                          alignItems: 'center',
                          fontFamily: Fonts.type.regular,
                          fontSize: Fonts.size.size_7,
                        }}
                      />
                    ) : null}
                    <Switch
                      value={item?.value}
                      onChange={item?.onChange}
                      toggleColor={Colors.darkBlueColor}
                    />
                  </View>
                </View>
              )}
              {item?.type === 'slider' && (
                <View style={styles.childFlexView}>
                  <Text style={styles.Heading1}>{item.sliderName}</Text>
                  <Slider
                    sliderStyle={{width: width * 0.59}}
                    setMinAgePreference={item?.setMinAgePreference}
                  />
                  <Text style={styles.Heading_3}>{item?.value}</Text>
                </View>
              )}
              {item?.type === 'buttonPlus' && (
                <View style={{alignItems: 'flex-end'}}>
                  <TouchableOpacity
                    onPress={item?.onPress}
                    style={styles.buttonmainstyle}>
                    <Image
                      source={Images.icon.iconPlus}
                      style={styles.buttonText}
                    />
                  </TouchableOpacity>
                </View>
              )}
              {item?.type === 'checkbox' && (
                <View style={styles.MeinView2}>
                  <Text style={[styles.Heading2, {width: width * 0.2}]}>
                    {item?.checkboxName}
                  </Text>
                  <View
                    style={{
                      borderWidth: 0.3,
                      width: width * 0.5,
                      borderColor: Colors.darkYellowColor,
                    }}
                  />
                  <CustomCheckBox
                    Checked={item?.Checked}
                    onPress={item?.onPress}
                    ListCheckbox={true}
                  />
                </View>
              )}
              {item?.type === 'datePicker' && (
                <View style={styles.MeinView2}>
                  <Text style={[styles.Heading2, {width: '50%'}]}>
                    {item?.title}
                  </Text>
                  <View style={{width: '45%', alignItems: 'flex-end'}}>
                    <CustomDatePicker
                      title={item?.datePickertitle}
                      date={item?.date}
                      datePicker={item?.datePicker}
                      onDateSelected={item?.onDateSelected}
                      showDatePicker={item?.showDatePicker}
                      textStyle={styles.text}
                      datePickerContainerStyle={styles.datePickerContainer}
                    />
                  </View>
                </View>
              )}
              {item?.type === 'textInput' && (
                <View>
                  <TextInputNative
                    nextFocusRef={item?.nextFocusRef}
                    title={item?.title}
                    customPlaceholder={item?.customPlaceholder}
                    {...item?.value}
                    placeholderTextColor={Colors.lightGrayColor}
                  />
                </View>
              )}
              {item?.type === 'textInput1' && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInputNative
                    nextFocusRef={item?.nextFocusRef}
                    title={item?.title}
                    customPlaceholder={item?.customPlaceholder}
                    {...item?.value}
                    placeholderTextColor={Colors.lightGrayColor}
                    containerStyle={{width: width * 0.4}}
                    isTitleRequired={false}
                  />
                  <TextInputNative
                    nextFocusRef={item?.nextFocusRef1}
                    title={item?.title1}
                    customPlaceholder={item?.customPlaceholder1}
                    {...item?.value1}
                    placeholderTextColor={Colors.lightGrayColor}
                    containerStyle={{width: width * 0.4}}
                    isTitleRequired={false}
                  />
                </View>
              )}
              {item?.type === 'dropDown' && (
                <View
                  style={[
                    styles.HeadingView,
                    {
                      alignItems: 'center',
                      width: '100%',
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.Heading2,
                      {
                        width: '50%',
                      },
                    ]}>
                    {item?.title}
                  </Text>
                  <View
                    style={{
                      alignItems: 'flex-end',
                      width: '45%',
                    }}>
                    <CustomDropDown
                      editable={true}
                      placeholder={item?.placeholder}
                      placeholderTextColor={Colors.lightGrey}
                      onChangeText={item?.onChangeText}
                      value={dropdownValue}
                      styleTextInput={[
                        {
                          marginRight: 0,
                        },
                      ]}
                      options={item?.options}
                    />
                  </View>
                </View>
              )}
              {item?.type === 'button' && (
                <View style={styles.btnView}>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      width: width * 0.25,
                      borderColor: Colors.darkGray,
                    }}
                  />
                  <TouchableOpacity
                    onPress={item?.onPress}
                    style={styles.btnClick}>
                    <Text style={styles.btnText}>{item.title}</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      width: width * 0.25,
                      borderColor: Colors.darkGray,
                    }}
                  />
                </View>
              )}
              {item?.type === 'line' && (
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: Colors.darkGray,
                    marginVertical: Metrics.ratio(20),
                  }}
                />
              )}
            </View>
          );
        }}
      />
      <View style={styles.bottomButtonStyle}>
        <AppButton
          title="Apply Filter"
          onPress={() => {
            NavigationService.goBack();
          }}
        />
      </View>
    </MainScreen>
  );
};

export default AdditionalFilter;
