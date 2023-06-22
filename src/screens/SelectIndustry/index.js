import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppButton, HeaderBack, MainScreen, Slider} from '../../common';
import {
  CustomCheckBox,
  CustomDatePicker,
  CustomDropDown,
  CustomStepsButton,
  PopUpModal,
} from '../../components';

import TextInputNative from '../../components/TextInputNative';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {Colors, Metrics, Images, Fonts} from '../../theme';

const SelectIndustry = ({navigation}) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [minHoursInType, setMinHoursInType] = useState(0);
  const [minHoursInCommand, setMinHoursInCommand] = useState(0);
  const SelectRoleDATA = [
    {
      id: 1,
      icon: Images.icon.Management,
      title: 'Management',
      customStyle: null,
      isChecked: true,
    },
    {
      id: 2,
      icon: Images.icon.Pic,
      title: 'Hospitality',
      customStyle: null,
      isChecked: true,
    },
    {
      id: 3,
      icon: Images.icon.Sic,
      title: 'Finance',
      customStyle: null,
      isChecked: false,
    },
    {
      id: 4,
      icon: Images.icon.FlightAttendant,
      title: 'FlightAttendant',
      customStyle: null,
      isChecked: false,
    },
    {
      id: 5,
      icon: Images.icon.Engineering,
      title: 'Engineering',
      customStyle: null,
      isChecked: false,
    },
    {
      id: 6,
      icon: Images.icon.Finance1,
      title: 'Finance',
      customStyle: null,
      isChecked: false,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const [isLocaleTimeCheck, setIsLocaleTimeCheck] = useState(true);
  const [isPartialComplete, setPartialComplete] = useState(false);
  const [datePickerStart, setDatePickerStart] = useState(false);
  const [dateStart, setDateStart] = useState(null);
  const [datePickerEnd, setDatePickerEnd] = useState(false);
  const [dateEnd, setDateEnd] = useState(null);
  const [datePickerTime, setDatePickerTime] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const [stepProgressIdentifiers, setStepProgressIdentifiers] = useState([]);
  const [showmodalRole, setShowModalRole] = useState(false);
  const [showmodalIndustry, setShowModalIndustry] = useState(false);
  const [checkListIdentifiers, setCheckListIdentifiers] = useState([]);
  const [checkedData, setCheckedData] = useState(SelectRoleDATA);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBack onBackPress={() => setActiveStep(activeStep - 1)} />
      ),
    });
    if (activeStep === 1) {
      navigation.setParams({
        title: 'Select Role',
      });
      return;
    } else if (activeStep === 2) {
      navigation.setParams({
        title: 'Basic Info',
      });
      return;
    }
    navigation.setParams({
      title: 'Select Industry',
    });
  }, [navigation, activeStep]);

  const [
    formObj,
    cityProps,
    hourTypeProps,
    optionalProps,
    totalFlightTimeProps,
    visaTypeProps,
    vaccinationsProps,
    industryProps,
    roleProps,
  ] = useHookForm(
    [
      'city',
      'hour',
      'optional',
      'hours',
      'visaType',
      'vaccinations',
      'industry',
      'role',
    ],
    {},
    ValidationSchema.basicInfoPhase1,
    ValidationSchema.basicInfoPhase2,
    ValidationSchema.role,
    ValidationSchema.industry,
  );

  const DATA = [
    {
      id: 1,
      icon: Images.icon.Aviation,
      title: 'Aviation',
      customStyle: null,
    },
    {
      id: 2,
      icon: Images.icon.Hospitality,
      title: 'Hospitality',
      customStyle: null,
    },
    {
      id: 3,
      icon: Images.icon.Finance,
      title: 'Finance',
      customStyle: null,
    },
    {
      id: 4,
      icon: Images.icon.Yatching,
      title: 'Yatching',
      customStyle: null,
    },
    {
      id: 5,
      icon: Images.icon.Assistant,
      title: 'Executive Assistant',
      customStyle: {width: 90, height: 50},
    },
    {
      id: 6,
      icon: Images.icon.Plus,
      title: '',
      customStyle: null,
    },
  ];
  const steps = [
    {title: 'Select Industry', isCompleted: false, stepValue: 0},
    {title: 'Select Role', isCompleted: false, stepValue: 1},
    {title: 'Basic Info', isCompleted: false, stepValue: 2},
  ];

  const onAdd = (currentStep, title) => {
    if (title === '') {
      setShowModalIndustry(true);
    } else {
      const stepsIDs = [...stepProgressIdentifiers];
      stepsIDs.push(currentStep);
      setStepProgressIdentifiers(stepsIDs);
      setActiveStep(activeStep + 1);
    }
  };

  const Item = ({title, icon, customStyle}) => (
    <TouchableOpacity
      onPress={() => onAdd(activeStep, title)}
      style={[styles.item, styles.shadow]}>
      <Image
        style={[
          styles.img,
          {
            marginTop: title === '' ? 20 : null,
          },
          {...customStyle},
        ]}
        source={icon}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  const SelectIndustryView = () => {
    return (
      <View style={styles.selectIndustryView}>
        <Text style={styles.headerText}>{'Select industry you are'}</Text>
        <Text
          style={[
            styles.headerText,
            {
              marginBottom: Metrics.ratio(24),
            },
          ]}>
          {'Recruiting in.'}
        </Text>
        <FlatList
          data={DATA}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item}) => (
            <Item
              title={item.title}
              icon={item.icon}
              customStyle={item.customStyle}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    );
  };

  const onPartialComplete = () => {
    setPartialComplete('partial');
    if (isPartialComplete) {
      setPartialComplete('fully');
      setTimeout(() => {
        NavigationService.navigate('Filter');
      }, 2000);
    }
  };

  const showDatePickerStart = () => {
    setDatePickerStart(true);
  };

  const onDateSelectedStart = value => {
    console.log(value, 'value');
    setDateStart(value);
    setDatePickerStart(false);
  };

  const showDatePickerEnd = () => {
    setDatePickerEnd(true);
  };

  const onDateSelectedEnd = value => {
    setDateEnd(value);
    setDatePickerEnd(false);
  };

  const showDatePickerTime = () => {
    setDatePickerTime(true);
  };

  const onDateSelectedTime = value => {
    setDateTime(value);
    setDatePickerTime(false);
  };

  const [dropdownValue, setDropdownValue] = useState('');

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

  const handleDropDownChange = value => {
    setDropdownValue(value);
  };

  const BasicInfo = () => {
    return (
      <View
        style={
          {
            // paddingHorizontal: Metrics.ratio(30),
          }
        }>
        {isPartialComplete ? (
          <View>
            <Text
              style={[
                styles.headerText,
                {marginTop: Metrics.ratio(30), marginBottom: Metrics.ratio(10)},
              ]}>
              {'Job specific requirements'}
            </Text>
            <Text
              style={[
                {
                  color: Colors.secondary,
                  fontFamily: Fonts.type.book,
                  fontSize: Metrics.ratio(14),
                  marginTop: Metrics.ratio(20),
                  marginBottom: Metrics.ratio(10),
                },
              ]}>
              {'Aircraft Type'}
            </Text>
            <CustomDropDown
              editable={false}
              placeholder={'Select Type'}
              placeholderTextColor={Colors.lightGrey}
              onChangeText={handleDropDownChange}
              value={dropdownValue}
              IsDropdown
              mainStyle={{
                backgroundColor: Colors.white,
              }}
              styleTextInput={{
                width: '100%',
                height: Metrics.ratio(50),
                paddingLeft: Metrics.ratio(14),
                paddingVertical: Metrics.ratio(1),
                backgroundColor: Colors.white,
              }}
              isRightStyle={{
                height: Metrics.ratio(50),
                paddingVertical: Metrics.ratio(15),
                paddingRight: Metrics.ratio(14),
                backgroundColor: Colors.white,
              }}
              arrowDropdownCircle={{
                width: Metrics.ratio(15),
                height: Metrics.ratio(15),
                resizeMode: 'contain',
              }}
              options={dropdownOptions}
              dropdownList={{
                width: '100%',
              }}
            />

            <View style={{marginVertical: Metrics.scaleVertical(15)}}>
              <Text
                style={[
                  {
                    color: Colors.secondary,
                    fontFamily: Fonts.type.book,
                    fontSize: Metrics.ratio(14),
                    marginBottom: Metrics.ratio(8),
                  },
                ]}>
                {'Minimum Hours on Type'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Slider
                  sliderStyle={{width: Metrics.screenWidth - 90}}
                  setMinAgePreference={setMinHoursInType}
                />
                <Text style={styles.value_text}>
                  {Math.ceil(minHoursInType)}
                </Text>
              </View>
            </View>

            <View style={{marginVertical: Metrics.scaleVertical(15)}}>
              <Text
                style={[
                  {
                    color: Colors.secondary,
                    fontFamily: Fonts.type.book,
                    fontSize: Metrics.ratio(14),
                    marginBottom: Metrics.ratio(8),
                  },
                ]}>
                {'Minimum Hours on Command'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Slider
                  sliderStyle={{width: Metrics.screenWidth - 90}}
                  setMinAgePreference={setMinHoursInCommand}
                />
                <Text style={styles.value_text}>
                  {Math.ceil(minHoursInCommand)}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <TextInputNative
                nextFocusRef={optionalProps.forwardRef}
                title={'Total Flight Time'}
                customPlaceholder={'Hours'}
                topSpaceLarge
                {...totalFlightTimeProps}
                placeholderTextColor={Colors.lightGrayColor}
                containerStyle={{width: '48%'}}
              />
              <TextInputNative
                nextFocusRef={totalFlightTimeProps.forwardRef}
                title={'Required Visa'}
                customPlaceholder={'Visa Type'}
                topSpaceLarge
                {...visaTypeProps}
                placeholderTextColor={Colors.lightGrayColor}
                containerStyle={{width: '48%'}}
              />
            </View>
            <TextInputNative
              nextFocusRef={visaTypeProps.forwardRef}
              title={'Vaccinations'}
              customPlaceholder={' Vaccinations'}
              topSpaceLarge
              {...vaccinationsProps}
              placeholderTextColor={Colors.lightGrayColor}
            />
            <AppButton
              title="Next"
              containerStyle={[styles.buttonStyle]}
              textStyle={{
                color: Colors.white,
              }}
              onPress={onPartialComplete}
            />
          </View>
        ) : (
          <View style={styles.partialCompleteBasicInfo}>
            <Text
              style={[
                styles.headerText,
                {marginTop: Metrics.ratio(30), marginBottom: Metrics.ratio(20)},
              ]}>
              {'Project Name'}
            </Text>
            <Text
              style={[
                {
                  color: Colors.secondary,
                  fontFamily: Fonts.type.book,
                  fontSize: Fonts.size.size_14,
                },
              ]}>
              {'Employment Type'}
            </Text>
            <CustomDropDown
              editable={false}
              placeholder={'Employment Type'}
              placeholderTextColor={Colors.lightGrey}
              onChangeText={handleDropDownChange}
              value={dropdownValue}
              IsDropdown
              mainStyle={{
                backgroundColor: Colors.white,
              }}
              styleTextInput={{
                width: '100%',
                height: Metrics.ratio(50),
                paddingLeft: Metrics.ratio(14),
                paddingVertical: Metrics.ratio(1),
              }}
              isRightStyle={{
                height: Metrics.ratio(50),
                paddingVertical: Metrics.ratio(15),
                paddingRight: Metrics.ratio(14),
              }}
              arrowDropdownCircle={{
                width: Metrics.ratio(15),
                height: Metrics.ratio(15),
                resizeMode: 'contain',
              }}
              dropdownList={{
                width: '100%',
              }}
              // imgIcon={Images.icon.clock}
              options={dropdownOptions}
            />
            <TextInputNative
              title={'Starting Location Airport/City'}
              customPlaceholder={'Airport / City'}
              topSpaceLarge
              placeholderTextColor={Colors.lightGrayColor}
              isNativeInput={true}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={[
                  {
                    color: Colors.secondary,
                    fontFamily: Fonts.type.book,
                    fontSize: Metrics.ratio(14),
                    marginTop: Metrics.ratio(20),
                    marginBottom: Metrics.ratio(10),
                  },
                ]}>
                {'Start Date'}
              </Text>
              <Text
                style={[
                  {
                    color: Colors.white,
                    fontFamily: Fonts.type.book,
                    fontSize: Fonts.size.size_13,
                    marginTop: Metrics.ratio(20),
                    marginBottom: Metrics.ratio(10),
                    backgroundColor: Colors.darkGray,
                    paddingLeft: Metrics.ratio(5),
                    paddingRight: Metrics.ratio(15),
                    borderRadius: Metrics.ratio(3),
                  },
                ]}>
                {'Immediately'}
              </Text>
            </View>
            <CustomDatePicker
              title={'Start Date'}
              date={dateStart}
              datePicker={datePickerStart}
              onDateSelected={onDateSelectedStart}
              showDatePicker={showDatePickerStart}
              hideDatePicker={() => setDatePickerStart(false)}
            />
            <CustomCheckBox
              Checked={isLocaleTimeCheck}
              onPress={() => setIsLocaleTimeCheck(!isLocaleTimeCheck)}
              title={'Local Time, Based on Starting Location'}
              titleColor={Colors.secondary}
              customMainStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: Metrics.ratio(25),
                marginBottom: Metrics.ratio(10),
              }}
              ListCheckbox={true}
            />
            <View
              style={{
                marginVertical: Metrics.ratio(10),
              }}>
              <CustomDatePicker
                title={'10:00 PM'}
                date={dateTime}
                datePicker={datePickerTime}
                onDateSelected={onDateSelectedTime}
                showDatePicker={showDatePickerTime}
                mode="time"
                imgSource={Images.icon.clock}
                hideDatePicker={() => setDatePickerStart(false)}
              />
            </View>
            <Text
              style={[
                {
                  color: Colors.secondary,
                  fontFamily: Fonts.type.book,
                  fontSize: Metrics.ratio(14),
                  marginBottom: Metrics.ratio(10),
                },
              ]}>
              {'Duration of Project'}
            </Text>
            <CustomDatePicker
              title={'End Date'}
              date={dateEnd}
              datePicker={datePickerEnd}
              onDateSelected={onDateSelectedEnd}
              showDatePicker={showDatePickerEnd}
              // textStyle={styles.textPicker}
            />
            <CustomCheckBox
              Checked={isChecked}
              onPress={onCheck}
              title={'Full Time'}
              titleColor={Colors.secondary}
              customMainStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: Metrics.ratio(20),
              }}
              ListCheckbox={true}
            />
            <AppButton
              title="Next"
              containerStyle={[styles.buttonStyle]}
              textStyle={{
                color: Colors.white,
              }}
              onPress={onPartialComplete}
            />
          </View>
        )}
      </View>
    );
  };

  const onCheck = () => {
    setIsChecked(!isChecked);
  };

  const onListCheckPress = item => {
    let selectededIdentifiers = [...checkListIdentifiers];
    let isAlreadyExist = selectededIdentifiers.findIndex(
      identifier => identifier == item?.id,
    );
    if (isAlreadyExist < 0) {
      selectededIdentifiers.push(item.id);
      setCheckListIdentifiers(selectededIdentifiers);
      return;
    }
    selectededIdentifiers.splice(isAlreadyExist, 1);
    setCheckListIdentifiers(selectededIdentifiers);
  };
  const SelectRole = () => {
    return (
      <View style={styles.SelectRole}>
        <Text style={styles.text}>
          select the roles you will be recruiting for in this industry
        </Text>
        {CheckboxListView()}
        <TouchableOpacity
          style={styles.plusView}
          onPress={() => setShowModalRole(true)}>
          <Image style={[styles.plus]} source={Images.icon.PlusBold} />
        </TouchableOpacity>
        <AppButton
          title="Next"
          containerStyle={[styles.buttonStyleFooterView]}
          textStyle={{
            color: Colors.white,
          }}
          onPress={() => onAdd(activeStep)}
        />
      </View>
    );
  };

  const CheckboxListView = () => {
    return (
      <View
        style={{
          marginTop: Metrics.ratio(12),
        }}>
        <FlatList
          data={checkedData}
          style={styles.selectIndustryList}
          // scrollEnabled={false}
          renderItem={({item}) => (
            <View>
              <CheckboxListViewItem
                title={item.title}
                icon={item.icon}
                customStyle={item.customStyle}
                isChecked={item.isChecked}
                onPress={() => onListCheckPress(item)}
                checkListSelectedIds={checkListIdentifiers}
                currentItem={item}
              />
              <View
                style={{
                  borderWidth: 1,
                  borderColor: Colors.lightGrayColor,
                }}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const CheckboxListViewItem = ({
    title,
    icon,
    customStyle,
    isChecked,
    onPress,
    checkListSelectedIds,
    currentItem,
  }) => (
    <View style={[styles.itemRole, styles.shadow]}>
      <Image style={[styles.imgRole, {...customStyle}]} source={icon} />
      <Text style={styles.titleRole}>{title}</Text>
      <CustomCheckBox
        Checked={checkListSelectedIds?.includes(currentItem.id)}
        onPress={onPress}
        ListCheckbox={true}
        checkListSelectedIds={checkListSelectedIds}
      />
    </View>
  );

  const MainView = () => {
    if (activeStep === 1) {
      return <>{SelectRole()}</>;
    } else if (activeStep === 2) {
      return <>{BasicInfo()}</>;
    } else {
      return <>{SelectIndustryView()}</>;
    }
  };

  return (
    <MainScreen>
      <View style={{marginTop: Metrics.ratio(20)}}>
        <CustomStepsButton
          steps={steps}
          activeStep={activeStep}
          isPartialComplete={isPartialComplete}
          completedIdentifers={stepProgressIdentifiers}
        />
      </View>
      {MainView()}
      <PopUpModal
        isVisible={showmodalIndustry}
        onBackdropPress={() => setShowModalIndustry(false)}
        heading="Add a new Industry"
        btnTitle="Add"
        nextFocusRef={roleProps}
        textInputTitle="Name Your Industry"
        textInputPlaceholder="Industry name"
        btnonpress={() => {
          setShowModalIndustry(false);
        }}
      />
      <PopUpModal
        isVisible={showmodalRole}
        onBackdropPress={() => setShowModalRole(false)}
        heading="Add a new Role"
        btnTitle="Add"
        nextFocusRef={industryProps}
        textInputTitle="Name Your Role"
        textInputPlaceholder="Role name"
        btnonpress={() => {
          setShowModalRole(false);
        }}
      />
    </MainScreen>
  );
};

export default SelectIndustry;
