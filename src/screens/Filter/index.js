import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  SectionList,
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
  CustomDropDownFilter,
  FilterModal,
  CustomCheckBox,
} from '../../components';
import {Colors, Images, Metrics} from '../../theme';
import styles from './styles';
import {NavigationService} from '../../utils';
import TextInputNative from '../../components/TextInputNative';
import {ValidationSchema, useHookForm} from '../../utils/ValidationUtil';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderCustomTitle from '../../common/HeaderCustomTitle';
import Icon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('screen');

const Filter = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Set Filter',
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
                paddingRight: Metrics.scaleHorizontal(10),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ButtonView style={{alignSelf: 'flex-end'}}>
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
            <ButtonView
              onPress={() => NavigationService.navigate('AdditionalFilter')}
              style={{marginTop: 20, alignSelf: 'flex-end', marginLeft: 20}}>
              <Image
                style={{height: 20}}
                resizeMode="contain"
                source={Images.icon.settings}
              />
            </ButtonView>
          </View>
        </View>
      ),
      headerTitle: () => (
        <HeaderCustomTitle
          title={`Set Filter`}
          customContainerStyle={{marginLeft: Metrics.ratio(10)}}
          onPress={() =>
            NavigationService.navigate('AdditionalFilter', {
              isSectionNavigate: false,
            })
          }
        />
      ),
    });
  }, [navigation]);

  const [formObj, countryProps, minimumProps, maximumProps] = useHookForm(
    ['country', 'minimum', 'maximum'],
    {},
    ValidationSchema.filter,
  );

  const [minhours, setminhours] = useState();
  const [relocatedswitch, setrelocatedswitch] = useState();
  const [position, setposition] = useState();
  const [sic, setSic] = useState(false);
  const [basedVny, setBasedVny] = useState([0]);
  const [flightVny, setFlightVnyy] = useState([0]);
  const [flightPic, setFlightPic] = useState([0]);
  const [flightSic, setFlightSic] = useState([0]);
  const [flightMultiEng, setFlightMultiEng] = useState([0]);
  const [flightMultiEng2, setFlightMultiEng2] = useState([0]);
  const [airCraftMin, setAirCraftMin] = useState([0]);
  const [dropdownValue, setDropdownValue] = useState('');
  const [showmodal, setShowModal] = useState(false);
  const data = [
    {
      id: 0,
      title: 'CREW BASED',
      data: [
        {
          title: 'Current Crew Position (Country)',
          type: 'textSubHeader',
        },
        {
          title: 'State/Country',
          type: 'textInput',
          customPlaceholder: 'Select Country',
          nextFocusRef: countryProps?.forwardRef,
          value: countryProps,
        },
        {
          title: 'Distance Option',
          sliderName: 'VNY',
          type: 'sliderHeader',
          value: `${parseInt(basedVny)} Mils.`,
          setMinAgePreference: setBasedVny,
        },
        {
          title: 'Willing to Relocated',
          type: 'switch',
          value: relocatedswitch,
          onChange: setrelocatedswitch,
        },
        {
          title: 'Commute Position',
          type: 'switch',
          value: position,
          onChange: setposition,
        },
        {
          type: 'line',
        },
      ],
      type: 'textHeader',
      isLeft: false,
      isCollapsed: false,
    },
    {
      id: 1,

      data: [
        {
          title: 'Min hours',
          type: 'switch',
          value: minhours,
          onChange: setminhours,
        },
        {
          sliderName: 'Min',
          type: 'slider',
          value: parseInt(flightVny),
          setMinAgePreference: setFlightVnyy,
        },
        {
          sliderName: 'Pic',
          type: 'slider',
          value: parseInt(flightPic),
          setMinAgePreference: setFlightPic,
        },
        {
          sliderName: 'Sic',
          type: 'slider',
          value: parseInt(flightSic),
          setMinAgePreference: setFlightSic,
        },
        {
          checkboxName: 'Multi Engine',
          type: 'checkbox',
          Checked: flightMultiEng,
          onPress: setFlightMultiEng,
        },
        {
          checkboxName: 'Turbo Prop',
          type: 'checkbox',
          Checked: parseInt(flightMultiEng2),
          onPress: setFlightMultiEng2,
        },
        {
          title: '+',
          type: 'buttonPlus',
          onPress: () => NavigationService.navigate('MoreFlter', 'FLIGHT'),
        },
        {
          type: 'line',
        },
      ],
      title: 'FLIGHT EXPERIENCE TOTAL TIME',
      type: 'textHeader',
      isLeft: false,
      isCollapsed: false,
    },
    {
      id: 2,

      data: [
        {
          checkboxName: 'FAA',
          type: 'checkbox',
          Checked: sic,
          onPress: setSic,
        },
        {
          checkboxName: 'EASA',
          type: 'checkbox',
          Checked: sic,
          onPress: setSic,
        },
        {
          checkboxName: 'CAA',
          type: 'checkbox',
          Checked: sic,
          onPress: setSic,
        },
        {
          title: '+',
          type: 'buttonPlus',
          onPress: () => NavigationService.navigate('MoreFlter', 'LICENSES'),
        },
        {
          type: 'line',
        },
      ],
      title: 'VALID LICENSES',
      type: 'textHeader',
      isLeft: false,
      isCollapsed: false,
    },
    {
      id: 3,

      data: [
        {
          checkboxName: 'Type rating',
          type: 'checkbox',
          Checked: sic,
          onPress: setSic,
        },
        {
          checkboxName: 'PIC',
          type: 'checkbox',
          Checked: sic,
          onPress: setSic,
        },
        {
          checkboxName: 'SIC',
          type: 'checkbox',
          Checked: sic,
          onPress: setSic,
        },
        {
          sliderName: 'TT minimum',
          type: 'slider',
          value: parseInt(airCraftMin),
          setMinAgePreference: setAirCraftMin,
        },
        {
          title: '+ Add Another AC type',
          type: 'button',
        },
        {
          type: 'line',
        },
      ],
      title: 'AIRCRAFT TYPE',
      type: 'textHeader',
      isLeft: false,
      isCollapsed: false,
    },
    {
      id: 4,

      title: 'Education',
      type: 'textHeader',
      isLeft: true,
      isCollapsed: false,
      data: [
        {
          title: 'Graduation',
          type: 'dropDown',
          placeholder: 'Multi Options',
          onChangeText: handleDropDownChange,
          value: dropdownValue,
          options: dropdownOptions,
        },
        {
          title: 'Year Graduation',
          type: 'dropDown',
          placeholder: 'Multi Options',
          onChangeText: handleDropDownChange,
          value: dropdownValue,
          options: dropdownOptions,
        },
        {
          type: 'line',
        },
      ],
    },
    {
      id: 5,

      title: 'Valid Travel Permit',
      type: 'textHeader',
      isLeft: false,
      isCollapsed: false,
      data: [
        {
          title: 'Proved full vaccination',
          type: 'switch',
          value: relocatedswitch,
          onChange: setrelocatedswitch,
        },
        {
          title: 'Passport Country',
          type: 'dropDown',
          placeholder: 'Multi Options',
          onChangeText: handleDropDownChange,
          value: dropdownValue,
          options: dropdownOptions,
        },
        {
          title: 'Visa',
          type: 'dropDown',
          placeholder: 'Multi Options',
          onChangeText: handleDropDownChange,
          value: dropdownValue,
          options: dropdownOptions,
        },
        {
          type: 'line',
        },
      ],
    },
    {
      id: 6,

      title: 'Other',
      type: 'textHeader',
      isLeft: false,
      isCollapsed: false,
      data: [
        {
          title: 'LANGUAGE',
          type: 'dropDown',
          placeholder: 'Multi Options',
          onChangeText: handleDropDownChange,
          value: dropdownValue,
          options: dropdownOptions,
        },
        {
          title: 'DRIVE LANGUAGE',
          type: 'dropDown',
          placeholder: 'Multi Options',
          onChangeText: handleDropDownChange,
          value: dropdownValue,
          options: dropdownOptions,
        },
        {
          type: 'line',
        },
      ],
    },
    {
      id: 7,
      title: 'Salary Range',
      type: 'textHeader',
      isLeft: false,
      isCollapsed: false,
      data: [
        {
          title: '',
          type: 'textInput1',
          customPlaceholder: 'Minimum',
          nextFocusRef: minimumProps?.forwardRef,
          value: minimumProps,
          title1: '',
          customPlaceholder1: 'Maximum',
          nextFocusRef1: maximumProps?.forwardRef,
          value1: maximumProps,
        },
      ],
    },
  ];
  const [listData, setListData] = useState(data);
  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

  const onCollapse = section => {
    console.log(section, 'section');
    let formattedData = [...listData];
    let isExist = formattedData.findIndex(item => item.id == section?.id);
    formattedData[isExist].isCollapsed = !formattedData[isExist].isCollapsed;
    setListData(formattedData);
  };

  const handleDropDownChange = value => {
    setDropdownValue(value);
  };

  // const onSubmit = formObj.handleSubmit(values => {
  //   console.log('values', values)
  //   if (values) {
  //     setShowModal(true);
  //   }
  // });

  const onCreate = () => {
    setShowModal(false);
    NavigationService.navigate('Home', {isNavigatedFromFilter: true});
  };

  const stylesInfo = {
    height: Metrics.screenHeight - 100,
  };

  return (
    <MainScreen>
      <Text style={[styles.topHeading]}>{`Candidate Matches: 200`}</Text>
      {listData.length > 0 &&
        listData.map(item => {
          return (
            <>
              <View style={styles.HeadingView}>
                <TouchableOpacity onPress={() => onCollapse(item)}>
                  <AntDesign
                    name={item.isCollapsed ? 'plussquare' : 'minussquare'}
                    color={Colors.darkYellowColor}
                    size={18}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.Heading,
                    {
                      width: item?.isLeft ? '90%' : null,
                    },
                  ]}>
                  {item?.title}
                </Text>
              </View>
              {!item?.isCollapsed ? (
                item.data.map(value => {
                  return (
                    <View style={styles.mainFlexView}>
                      {value?.type === 'textSubHeader' && (
                        <Text style={styles.subHeading}>{value?.title}</Text>
                      )}
                      {value?.type === 'sliderHeader' && (
                        <View
                          style={{marginVertical: Metrics.scaleVertical(10)}}>
                          <Text style={styles.Heading2}>{value?.title}</Text>
                          <View style={styles.childFlexView}>
                            <Text style={styles.Heading1}>
                              {value?.sliderName}
                            </Text>
                            <Slider
                              sliderStyle={{width: width * 0.59}}
                              setMinAgePreference={value?.setMinAgePreference}
                            />

                            <Text style={styles.value_text}>{value.value}</Text>
                          </View>
                        </View>
                      )}
                      {value?.type === 'switch' && (
                        <View style={[styles.switchView]}>
                          <Text style={styles.Heading2}>{value?.title}</Text>
                          <Switch
                            value={value?.value}
                            onChange={value?.onChange}
                            toggleColor={Colors.darkBlueColor}
                          />
                        </View>
                      )}
                      {value?.type === 'slider' && (
                        <View style={styles.childFlexView}>
                          <Text style={styles.Heading1}>
                            {value.sliderName}
                          </Text>
                          <Slider
                            sliderStyle={{width: width * 0.59}}
                            setMinAgePreference={value?.setMinAgePreference}
                          />
                          <Text style={styles.Heading_3}>{value?.value}</Text>
                        </View>
                      )}
                      {value?.type === 'buttonPlus' && (
                        <View style={{alignItems: 'flex-end'}}>
                          <TouchableOpacity
                            onPress={value?.onPress}
                            style={styles.buttonmainstyle}>
                            <Image
                              source={Images.icon.iconPlus}
                              style={styles.buttonText}
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      {value?.type === 'checkbox' && (
                        <View style={[styles.MeinView2, {width: '100%'}]}>
                          <View
                            style={{
                              width: '90%',
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={[
                                styles.Heading2,
                                {marginRight: 10, width: '15%'},
                              ]}
                              numberOfLines={2}>
                              {value?.checkboxName}
                            </Text>
                            <View
                              style={{
                                height: 1,
                                backgroundColor: Colors.darkYellowColor,
                                width: '80%',
                              }}
                            />
                          </View>

                          <View>
                            <CustomCheckBox
                              Checked={value?.Checked}
                              onPress={value?.onPress}
                              ListCheckbox={true}
                            />
                          </View>
                        </View>
                      )}
                      {value?.type === 'textInput' && (
                        <View>
                          <TextInputNative
                            isNativeInput={true}
                            title={value?.title}
                            editable={false}
                            customPlaceholder={value?.customPlaceholder}
                            placeholderTextColor={Colors.lightGrayColor}
                          />
                        </View>
                      )}
                      {value?.type === 'textInput1' && (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingBottom: 10,
                          }}>
                          <TextInputNative
                            nextFocusRef={value?.nextFocusRef}
                            title={value?.title}
                            customPlaceholder={value?.customPlaceholder}
                            {...value?.value}
                            placeholderTextColor={Colors.lightGrayColor}
                            containerStyle={styles.inputStyle}
                            isTitleRequired={false}
                          />
                          <TextInputNative
                            nextFocusRef={value?.nextFocusRef1}
                            title={value?.title1}
                            customPlaceholder={value?.customPlaceholder1}
                            {...value?.value1}
                            placeholderTextColor={Colors.lightGrayColor}
                            containerStyle={styles.inputStyle}
                            isTitleRequired={false}
                          />
                        </View>
                      )}
                      {value?.type === 'dropDown' && (
                        <View
                          style={[
                            styles.HeadingView,
                            {
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            },
                          ]}>
                          <Text style={[styles.Heading2]}>{value?.title}</Text>
                          <CustomDropDownFilter
                            editable={false}
                            placeholder={value?.placeholder}
                            placeholderTextColor={Colors.lightGrey}
                            onChangeText={value?.onChangeText}
                            value={dropdownValue}
                            styleTextInput={{
                              alignSelf: 'flex-end',
                              marginRight: Metrics.ratio(0),
                              zIndex: 100,
                            }}
                            options={value?.options}
                            IsDropdown={false}
                          />
                        </View>
                      )}
                      {value?.type === 'button' && (
                        <View style={styles.btnView}>
                          <View
                            style={{
                              borderBottomWidth: 1,
                              width: width * 0.25,
                              borderColor: Colors.darkGray,
                            }}
                          />
                          <TouchableOpacity
                            onPress={value?.onPress}
                            style={styles.btnClick}>
                            <Text style={styles.btnText}>{value.title}</Text>
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
                      {value?.type === 'line' && (
                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderColor: Colors.darkGray,
                            marginVertical: Metrics.ratio(20),
                            height: 1,
                          }}
                        />
                      )}
                    </View>
                  );
                })
              ) : (
                <></>
              )}
            </>
          );
        })}
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        data={listData}
        renderItem={({item, index, section}) => {
          return (
            <>
              <View style={styles.HeadingView}>
                <TouchableOpacity onPress={() => onCollapse(item)}>
                  <AntDesign
                    name={item.isCollapsed ? 'plussquare' : 'minussquare'}
                    color={Colors.darkYellowColor}
                    size={18}
                  />
                </TouchableOpacity>
                <Text
                  style={[
                    styles.Heading,
                    {
                      width: section?.isLeft ? '90%' : null,
                    },
                  ]}>
                  {item?.title}
                </Text>
              </View>
              {!item?.isCollapsed ? (
                item.data.map(value => {
                  return (
                    <View style={styles.mainFlexView}>
                      {value?.type === 'textSubHeader' && (
                        <Text style={styles.subHeading}>{value?.title}</Text>
                      )}
                      {value?.type === 'sliderHeader' && (
                        <View
                          style={{marginVertical: Metrics.scaleVertical(10)}}>
                          <Text style={styles.Heading2}>{value?.title}</Text>
                          <View style={styles.childFlexView}>
                            <Text style={styles.Heading1}>
                              {value?.sliderName}
                            </Text>
                            <Slider
                              sliderStyle={{width: width * 0.59}}
                              setMinAgePreference={value?.setMinAgePreference}
                            />

                            <Text style={styles.value_text}>{value.value}</Text>
                          </View>
                        </View>
                      )}
                      {value?.type === 'switch' && (
                        <View style={[styles.switchView]}>
                          <Text style={styles.Heading2}>{value?.title}</Text>
                          <Switch
                            value={value?.value}
                            onChange={value?.onChange}
                            toggleColor={Colors.darkBlueColor}
                          />
                        </View>
                      )}
                      {value?.type === 'slider' && (
                        <View style={styles.childFlexView}>
                          <Text style={styles.Heading1}>
                            {value.sliderName}
                          </Text>
                          <Slider
                            sliderStyle={{width: width * 0.59}}
                            setMinAgePreference={value?.setMinAgePreference}
                          />
                          <Text style={styles.Heading_3}>{value?.value}</Text>
                        </View>
                      )}
                      {value?.type === 'buttonPlus' && (
                        <View style={{alignItems: 'flex-end'}}>
                          <TouchableOpacity
                            onPress={value?.onPress}
                            style={styles.buttonmainstyle}>
                            <Image
                              source={Images.icon.iconPlus}
                              style={styles.buttonText}
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      {value?.type === 'checkbox' && (
                        <View style={[styles.MeinView2, {width: '100%'}]}>
                          <View
                            style={{
                              width: '90%',
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={[
                                styles.Heading2,
                                {marginRight: 10, width: '15%'},
                              ]}
                              numberOfLines={2}>
                              {value?.checkboxName}
                            </Text>
                            <View
                              style={{
                                height: 1,
                                backgroundColor: Colors.darkYellowColor,
                                width: '80%',
                              }}
                            />
                          </View>

                          <View>
                            <CustomCheckBox
                              Checked={value?.Checked}
                              onPress={value?.onPress}
                              ListCheckbox={true}
                            />
                          </View>
                        </View>
                      )}
                      {value?.type === 'textInput' && (
                        <View>
                          <TextInputNative
                            isNativeInput={true}
                            title={value?.title}
                            editable={false}
                            customPlaceholder={value?.customPlaceholder}
                            placeholderTextColor={Colors.lightGrayColor}
                          />
                        </View>
                      )}
                      {value?.type === 'textInput1' && (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingBottom: 10,
                          }}>
                          <TextInputNative
                            nextFocusRef={value?.nextFocusRef}
                            title={value?.title}
                            customPlaceholder={value?.customPlaceholder}
                            {...value?.value}
                            placeholderTextColor={Colors.lightGrayColor}
                            containerStyle={styles.inputStyle}
                            isTitleRequired={false}
                          />
                          <TextInputNative
                            nextFocusRef={value?.nextFocusRef1}
                            title={value?.title1}
                            customPlaceholder={value?.customPlaceholder1}
                            {...value?.value1}
                            placeholderTextColor={Colors.lightGrayColor}
                            containerStyle={styles.inputStyle}
                            isTitleRequired={false}
                          />
                        </View>
                      )}
                      {value?.type === 'dropDown' && (
                        <View
                          style={[
                            styles.HeadingView,
                            {
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            },
                          ]}>
                          <Text style={[styles.Heading2]}>{value?.title}</Text>
                          <CustomDropDownFilter
                            editable={false}
                            placeholder={value?.placeholder}
                            placeholderTextColor={Colors.lightGrey}
                            onChangeText={value?.onChangeText}
                            value={dropdownValue}
                            styleTextInput={{
                              alignSelf: 'flex-end',
                              marginRight: Metrics.ratio(0),
                              zIndex: 100,
                            }}
                            options={value?.options}
                            IsDropdown={false}
                          />
                        </View>
                      )}
                      {value?.type === 'button' && (
                        <View style={styles.btnView}>
                          <View
                            style={{
                              borderBottomWidth: 1,
                              width: width * 0.25,
                              borderColor: Colors.darkGray,
                            }}
                          />
                          <TouchableOpacity
                            onPress={value?.onPress}
                            style={styles.btnClick}>
                            <Text style={styles.btnText}>{value.title}</Text>
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
                      {value?.type === 'line' && (
                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderColor: Colors.darkGray,
                            marginVertical: Metrics.ratio(20),
                            height: 1,
                          }}
                        />
                      )}
                    </View>
                  );
                })
              ) : (
                <></>
              )}
            </>
          );
        }}
      /> */}
      <View style={styles.bottomButtonStyle}>
        <AppButton title="Let's Go" onPress={() => setShowModal(true)} />
      </View>
      <FilterModal
        isVisible={showmodal}
        onBackdropPress={() => setShowModal(false)}
        btnTitle="Okay"
        btnonpress={onCreate}
      />
    </MainScreen>
  );
};

export default Filter;
