import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  AppButton,
  HeaderBack,
  HeaderRightIcon,
  MainScreen,
  Switch,
} from '../../common';
import {Colors, Images, Metrics} from '../../theme';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import TextInputNative from '../../components/TextInputNative';
import styles from './styles';

const CrewContactSummary = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Crew List',
    });
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBack />,
      headerRight: () => <HeaderRightIcon image={Images.icon.home} />,
    });
  }, []);

  const [
    formObj,
    starttime1,
    starttime2,
    timezone1,
    timezone2,
    interviewaddress,
    date1,
    date2,
  ] = useHookForm(
    [
      'starttime1',
      'starttime2',
      'timezone1',
      'timezone2',
      'interviewaddress',
      'date1',
      'date2',
    ],
    {},
    ValidationSchema.logIn,
  );

  const [iD, setId] = useState(route?.params?.type);
  const [btn, setBtn] = useState(0);
  const [btnOne, setBtnOne] = useState(0);
  const [date, setDate] = useState(route?.params?.type === 1 ? true : false);
  const [switchOne, setSwitchOne] = useState();
  const [switchTwo, setSwitchTwo] = useState();
  const [hiringID, setHiringID] = useState(0);

  const [relocatedswitch, setrelocatedswitch] = useState();
  const [Vaccines, setVaccines] = useState();
  const [Certificates, setCertificates] = useState();
  const [Others, setOthers] = useState();
  const [visa, setvisa] = useState();

  const handlechange = id => {
    if (iD == id) {
      setId();
    } else {
      setId(id);
    }
  };

  const arr = [
    {
      icon: Images.menuicon.position,
      name: 'Position summary',
    },
    {
      icon: Images.menuicon.interview,
      name: 'Interview',
    },
    {
      icon: Images.menuicon?.download,
      name: 'Documents to download',
    },
    {
      icon: Images.menuicon?.hiring,
      name: 'Hiring process & service cost',
    },
    {
      icon: Images.menuicon.notepad,
      name: 'Note',
    },
    {
      icon: Images.menuicon.contact,
      name: 'Talent-On Assistance',
    },
    {
      icon: Images.menuicon.star,
      name: 'Stars attributed',
    },
  ];

  const summaryarr = [
    {
      name: 'Position Start',
      value: '4-24-2022',
    },
    {
      name: 'Salary',
      value: '$ 120.000',
    },
    {
      name: 'Based',
      value: 'VNY',
    },
    {
      name: 'Aircraft',
      value: 'Floating Fleet',
    },
    {
      name: 'Tail number',
      value: 'Falcon 2000',
    },
  ];

  const hiringarr = [
    {
      name: 'Interview',
      value: 'Pass',
    },
    {
      name: 'FREE try start',
      value: '5-3-2022',
    },
    {
      name: 'FREE try end',
      value: '6-4-2022',
    },
    {
      name: '3 Months try end',
      value: '8-4-2022',
    },
    {
      name: '6 Months try end',
      value: '2-4-2023',
    },
  ];

  const StarsAttribytedarr = [
    {
      name: 'ARRIVED ON TIME FOR INTERVIEW',
      image: Images.cv.StarsImages,
    },
    {
      name: 'THIS PERSON IS RESPECTFUL',
      image: Images.cv.StarsImages,
    },
    {
      name: 'POSITIVE FEEDBACK FROM CLIENTS',
      image: Images.cv.StarsImages,
    },
    {
      name: 'POSITIVE FEEDBACK FROM PILOTS',
      image: Images.cv.StarsImages,
    },
    {
      name: "UNDERSTAND CLIENT'S PRIVACY ",
      image: Images.cv.StarsImages,
    },
  ];

  const Summary = () => {
    return (
      <View style={{padding: 30}}>
        <View style={styles.summary}>
          <Text style={styles.summarytxt1}>Position</Text>
          <TouchableOpacity>
            <Feather name="edit" size={20} color="#1C3C54" />
          </TouchableOpacity>
        </View>
        {summaryarr.map(val => {
          const {name, value} = val;
          return (
            <View style={styles.value}>
              <Text style={styles.summarytxt}>{name}</Text>
              <Text style={styles.valuetxt}>{value}</Text>
            </View>
          );
        })}
        <View style={{paddingTop: 15}}>
          <Text style={{color: '#CBCBCB', paddingBottom: 10, fontSize: 15}}>
            Personal Note
          </Text>
          <View style={styles.personalNote}></View>
        </View>
      </View>
    );
  };

  const AssistanceFun = () => {
    return (
      <View
        style={{
          borderRadius: 15,
          borderColor: '#707070',
          borderWidth: 1,
          margin: 20,
          padding: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#1C3C54',
              fontSize: 20,
              fontWeight: 'bold',
              paddingRight: 10,
            }}>
            TALENT-ON
          </Text>
          <Text style={{color: '#1C3C54', fontSize: 20}}>Assistance</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={Images.icon.Face}
              resizeMode="contain"
              style={{height: 25, width: 25, tintColor: '#B50404'}}
            />
            <Text style={{color: '#B50404', paddingLeft: 10, fontSize: 16}}>
              Urgency
            </Text>
          </View>
          <AppButton
            title="Call us"
            containerStyle={{
              width: 100,
              borderRadius: 40,
              backgroundColor: '#1C3C54',
              height: 35,
              borderColor: '#BC8A48',
              borderWidth: 1,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#1C3C54', paddingLeft: 0, fontSize: 16}}>
              General Assistance
            </Text>
          </View>
          <AppButton
            title="Contact us"
            containerStyle={{
              width: 100,
              borderRadius: 40,
              backgroundColor: '#1C3C54',
              height: 35,
              borderColor: '#BC8A48',
              borderWidth: 1,
            }}
          />
        </View>
      </View>
    );
  };

  const InterviewFun = () => {
    return (
      <View style={{padding: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: Metrics.scaleHorizontal(10),
          }}>
          <TouchableOpacity
            style={[
              styles.btn,
              {backgroundColor: btn === 0 ? '#1C3C54' : '#F3F7FC'},
            ]}
            onPress={() => {
              setBtn(0);
            }}>
            <Text
              style={[
                {paddingHorizontal: 20},
                {color: btn === 0 ? '#fff' : '#1C3C54'},
              ]}>
              Interview
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: btn === 1 ? '#1C3C54' : Colors.greenColor,
                marginHorizontal: Metrics.scaleHorizontal(10),
              },
            ]}
            onPress={() => {
              setBtn(1);
            }}>
            <Text
              style={[
                {paddingHorizontal: 20},
                {color: btn === 1 ? '#fff' : Colors.white},
              ]}>
              POSITIVE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btn,
              {backgroundColor: btn === 2 ? '#1C3C54' : Colors.redColor},
            ]}
            onPress={() => {
              setBtn(2);
            }}>
            <Text
              style={[
                {paddingHorizontal: 20},
                {color: btn === 2 ? '#fff' : Colors.white},
              ]}>
              NEGATIVE
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 20,
          }}>
          <View
            style={{
              borderColor: 'rgba(188, 138, 72,0.8)',
              borderBottomWidth: 1,
              width: '20%',
            }}
          />
          <TouchableOpacity onPress={() => setDate(!date)}>
            <Text>{`${!date ? '+' : '-'} Suggest Dates and Time`}</Text>
          </TouchableOpacity>
          <View
            style={{
              borderColor: 'rgba(188, 138, 72,0.8)',
              borderBottomWidth: 1,
              width: '20%',
            }}
          />
        </View> */}
        {!date ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
              }}>
              <View style={{width: 120, alignItems: 'center'}}>
                <Text style={{color: '#1C3C54', fontSize: 16}}>Date</Text>
                <View style={{marginLeft: Metrics.scaleHorizontal(10)}}>
                  <TextInputNative
                    placeholderTextColor={Colors.darkBlueColor}
                    customContainerStyles={{
                      borderColor: Colors.lightGrayColor,
                      borderWidth: 1,
                    }}
                    nextFocusRef={date1.date1}
                    customPlaceholder={'4-05-2022'}
                    customBorderColor={Colors.darkYellowColor}
                    // topSpaceLarge
                    {...date1}
                  />
                </View>
              </View>
              <View style={{width: 110, alignItems: 'center'}}>
                <Text style={{color: '#1C3C54', fontSize: 16}}>Start Time</Text>
                <TextInputNative
                  placeholderTextColor={Colors.darkBlueColor}
                  customContainerStyles={{
                    borderColor: '#CBCBCB',
                    borderWidth: 1,
                  }}
                  nextFocusRef={starttime1.starttime1}
                  customPlaceholder={'09:00 am'}
                  customBorderColor={Colors.darkYellowColor}
                  // topSpaceLarge
                  {...starttime1}
                />
              </View>
              <View>
                <Text style={{color: '#1C3C54', fontSize: 16}}>Time Zone</Text>

                <TextInputNative
                  placeholderTextColor={Colors.darkBlueColor}
                  customContainerStyles={{
                    borderColor: '#CBCBCB',
                    borderWidth: 1,
                  }}
                  nextFocusRef={timezone1.timezone1}
                  customPlaceholder={'PST'}
                  customBorderColor={Colors.darkYellowColor}
                  // topSpaceLarge
                  {...timezone1}
                />
              </View>
              <TouchableOpacity>
                <AntDesign name="closesquare" size={16} color="#B50404" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
              }}>
              <View style={{width: 120, alignItems: 'center'}}>
                <Text style={{color: '#1C3C54', fontSize: 16}}>Date</Text>
                <View style={{marginLeft: Metrics.scaleHorizontal(10)}}>
                  <TextInputNative
                    placeholderTextColor={Colors.darkBlueColor}
                    customContainerStyles={{
                      borderColor: Colors.lightGrayColor,
                      borderWidth: 1,
                    }}
                    nextFocusRef={date1.date1}
                    customPlaceholder={'4-05-2022'}
                    customBorderColor={Colors.darkYellowColor}
                    // topSpaceLarge
                    {...date1}
                  />
                </View>
              </View>
              <View style={{width: 120, alignItems: 'center'}}>
                <Text style={{color: '#1C3C54', fontSize: 16}}>Start Time</Text>
                <View style={{marginLeft: Metrics.scaleHorizontal(10)}}>
                  <TextInputNative
                    placeholderTextColor={Colors.darkBlueColor}
                    customContainerStyles={{
                      borderColor: '#CBCBCB',
                      borderWidth: 1,
                    }}
                    nextFocusRef={timezone2.timezone2}
                    customPlaceholder={'09:00 am'}
                    customBorderColor={Colors.darkYellowColor}
                    // topSpaceLarge
                    {...timezone2}
                  />
                </View>
              </View>
              <View style={{width: 110, alignItems: 'center'}}>
                <Text style={{color: '#1C3C54', fontSize: 16}}>Time Zone</Text>
                <TextInputNative
                  placeholderTextColor={Colors.darkBlueColor}
                  customContainerStyles={{
                    borderColor: '#CBCBCB',
                    borderWidth: 1,
                  }}
                  nextFocusRef={starttime2.starttime2}
                  customPlaceholder={'PST'}
                  customBorderColor={Colors.darkYellowColor}
                  // topSpaceLarge
                  {...starttime2}
                />
              </View>
              <TouchableOpacity>
                <AntDesign name="closesquare" size={16} color="#B50404" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={{color: '#BC8A48', fontSize: 16}}>
                + add more dates
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
              }}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: btnOne === 0 ? '#1C3C54' : '#F3F7FC',
                    borderRadius: 70,
                    width: 100,
                    height: 40,
                  },
                ]}
                onPress={() => {
                  setBtnOne(0);
                }}>
                <Text
                  style={[
                    {paddingHorizontal: 20},
                    {color: btnOne === 0 ? '#fff' : '#1C3C54'},
                  ]}>
                  Video
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: btnOne === 1 ? '#1C3C54' : '#F3F7FC',
                    borderRadius: 70,
                    width: 100,
                    height: 40,
                  },
                ]}
                onPress={() => {
                  setBtnOne(1);
                }}>
                <Text
                  style={[
                    {paddingHorizontal: 20},
                    {color: btnOne === 1 ? '#fff' : '#1C3C54'},
                  ]}>
                  Phone
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: btnOne === 2 ? '#1C3C54' : '#F3F7FC',
                    borderRadius: 70,
                    width: 120,
                    height: 40,
                  },
                ]}
                onPress={() => {
                  setBtnOne(2);
                }}>
                <Text
                  style={[
                    {paddingHorizontal: 20},
                    {color: btnOne === 2 ? '#fff' : '#1C3C54'},
                  ]}>
                  In-Person
                </Text>
              </TouchableOpacity>
            </View>
            {btnOne === 0 ? (
              <View style={{paddingTop: 10}}>
                <Text style={{color: '#BC8A48'}}>
                  Video link sent to the candidate
                </Text>
                <TextInput
                  style={{
                    borderColor: '#CBCBCB',
                    borderWidth: 1,
                    marginTop: 10,
                  }}
                />
              </View>
            ) : btnOne === 1 ? (
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                  }}>
                  <Text style={{color: '#1C3C54', fontSize: 16}}>
                    Candidate call the interviewer
                  </Text>
                  <Switch value={switchOne} onChange={setSwitchOne} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                  }}>
                  <Text style={{color: '#1C3C54', fontSize: 16}}>
                    Interviewer call the candidate
                  </Text>
                  <Switch value={switchOne} onChange={setSwitchOne} />
                </View>
                <View style={{paddingTop: 10}}>
                  <Text style={{color: '#BC8A48'}}>
                    Send phone invitation to the candidate
                  </Text>
                </View>
              </View>
            ) : (
              <View>
                <View style={{paddingTop: 10}}>
                  <Text style={{color: '#1C3C54'}}>Interview address *</Text>
                  <TextInput style={{borderColor: '#CBCBCB', borderWidth: 1}} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#1C3C54', fontSize: 16}}>
                    Company paid for travel expenses
                  </Text>
                  <Switch value={switchTwo} onChange={setSwitchTwo} />
                </View>
              </View>
            )}
            <View style={{paddingTop: 10}}>
              <Text style={{color: '#BC8A48'}}>+ Add to your calender</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 20,
              }}>
              <AppButton
                title="Hire"
                buttonstyle={{}}
                textStyle={{
                  fontSize: 10,
                  paddingHorizontal: 13,
                  color: '#fff',
                }}
                containerStyle={{
                  width: 150,
                  borderColor: '#1C3C54',
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              />

              <AppButton
                title="Cancel"
                textStyle={{
                  fontSize: 10,
                  paddingHorizontal: 13,
                  color: '#fff',
                }}
                containerStyle={{
                  width: 150,
                  backgroundColor: '#1C3C54',
                  borderColor: '#BC8A48',
                  borderWidth: 1,
                  borderRadius: 10,
                }}
                onPress={() => {
                  //   setHiringID(0);
                }}
              />
            </View>
          </>
        ) : (
          <>
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: btnOne === 0 ? '#1C3C54' : '#F3F7FC',
                    borderRadius: 70,
                    width: 95,
                    height: 40,
                  },
                ]}
                onPress={() => {
                  setBtnOne(0);
                }}>
                <Text
                  style={[
                    {paddingHorizontal: 15},
                    {color: btnOne === 0 ? '#fff' : '#1C3C54'},
                  ]}>
                  Video
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: btnOne === 1 ? '#1C3C54' : '#F3F7FC',
                    borderRadius: 70,
                    width: 95,
                    height: 40,
                  },
                ]}
                onPress={() => {
                  setBtnOne(1);
                }}>
                <Text
                  style={[
                    {paddingHorizontal: 15},
                    {color: btnOne === 1 ? '#fff' : '#1C3C54'},
                  ]}>
                  Phone
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: btnOne === 2 ? '#1C3C54' : '#F3F7FC',
                    borderRadius: 70,
                    width: 95,
                    height: 40,
                  },
                ]}
                onPress={() => {
                  setBtnOne(2);
                }}>
                <Text
                  style={[
                    {paddingHorizontal: 15},
                    {color: btnOne === 2 ? '#fff' : '#1C3C54'},
                  ]}>
                  In-Person
                </Text>
              </TouchableOpacity>
            </View> */}
            <View style={{paddingTop: 15}}>
              <Text style={{color: '#707070', paddingBottom: 20}}>
                Personal Note
              </Text>
              <View style={styles.personalNote}></View>
            </View>
          </>
        )}
      </View>
    );
  };

  const DocumentFun = () => {
    return (
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 8,
          }}>
          <Text style={{color: '#1C3C54', fontSize: 14, width: 150}}>
            Passport
          </Text>
          <Switch
            value={relocatedswitch}
            onChange={setrelocatedswitch}
            toggleColor={Colors.darkBlueColor}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <Text style={{color: '#BC8A48', fontSize: 14}}>Download*</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 8,
          }}>
          <Text style={{color: '#1C3C54', fontSize: 14, width: 150}}>Visa</Text>
          <Switch
            value={visa}
            onChange={setvisa}
            toggleColor={Colors.darkBlueColor}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
            }}>
            <Text style={{color: '#BC8A48', fontSize: 14}}></Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 8,
          }}>
          <Text style={{color: '#1C3C54', fontSize: 14, width: 150}}>
            Vaccines
          </Text>
          <Switch
            value={Vaccines}
            onChange={setVaccines}
            toggleColor={Colors.darkBlueColor}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
            }}>
            <Text style={{color: '#BC8A48', fontSize: 14}}></Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 8,
          }}>
          <Text style={{color: '#1C3C54', fontSize: 14, width: 150}}>
            Certificates
          </Text>
          <Switch
            value={Certificates}
            onChange={setCertificates}
            toggleColor={Colors.darkBlueColor}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
            }}>
            <Text style={{color: '#BC8A48', fontSize: 14}}></Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 8,
          }}>
          <Text style={{color: '#1C3C54', fontSize: 14, width: 150}}>
            Others
          </Text>
          <Switch
            value={Others}
            onChange={setOthers}
            toggleColor={Colors.darkBlueColor}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
            }}>
            <Text style={{color: '#BC8A48', fontSize: 14}}></Text>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{color: '#1C3C54', fontSize: 13}}>
            Send to my email *
          </Text>
          {/* <Input inputStyles={{ borderColor: '#CBCBCB', borderWidth: 1 }} /> */}
        </View>
      </View>
    );
  };

  const HiringFun = () => {
    return (
      <View style={{paddingTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <AppButton
            title="Free try"
            textStyle={{
              fontSize: 10,
              paddingHorizontal: 13,
              color: hiringID === 0 ? '#fff' : '#1C3C54',
            }}
            containerStyle={{
              height: 40,
              backgroundColor: hiringID === 0 ? '#1C3C54' : '#F3F7FC',
              borderColor: '#BC8A48',
              borderWidth: 1.2,
            }}
            onPress={() => {
              setHiringID(0);
            }}
          />
          <AppButton
            title="3 months"
            textStyle={{
              fontSize: 10,
              paddingHorizontal: 13,
              color: hiringID === 1 ? '#fff' : '#1C3C54',
            }}
            containerStyle={{
              height: 40,
              backgroundColor: hiringID === 1 ? '#1C3C54' : '#F3F7FC',
              borderColor: '#BC8A48',
              borderWidth: 1.2,
            }}
            onPress={() => {
              setHiringID(1);
            }}
          />
          <AppButton
            title="6 months"
            textStyle={{
              fontSize: 10,
              paddingHorizontal: 13,
              color: hiringID === 2 ? '#fff' : '#1C3C54',
            }}
            containerStyle={{
              height: 40,
              backgroundColor: hiringID === 2 ? '#1C3C54' : '#F3F7FC',
              borderColor: '#BC8A48',
              borderWidth: 1.2,
            }}
            onPress={() => {
              setHiringID(2);
            }}
          />
          <AppButton
            title="Hire"
            textStyle={{
              fontSize: 10,
              paddingHorizontal: 13,
              color: hiringID === 3 ? '#fff' : '#1C3C54',
            }}
            containerStyle={{
              height: 40,
              backgroundColor: hiringID === 3 ? '#1C3C54' : '#F3F7FC',
              borderColor: '#BC8A48',
              borderWidth: 1.2,
            }}
            onPress={() => {
              setHiringID(3);
            }}
          />
          <AppButton
            title="No Hire"
            textStyle={{
              fontSize: 10,
              paddingHorizontal: 13,
              color: hiringID === 4 ? '#fff' : '#1C3C54',
            }}
            containerStyle={{
              height: 40,
              backgroundColor: hiringID === 4 ? '#1C3C54' : '#F3F7FC',
              borderColor: '#BC8A48',
              borderWidth: 1.2,
            }}
            onPress={() => {
              setHiringID(4);
            }}
          />
        </View>
        <View
          style={{
            // backgroundColor: '#F3F7FC',
            margin: 15,
            padding: 15,
            borderRadius: 15,
            // borderColor: '#707070',
            // borderWidth: 1,
          }}>
          <View style={styles.summary}>
            <Text style={styles.summarytxt}>PROGRESS</Text>
            <TouchableOpacity>
              <Feather name="edit" size={20} color="#1C3C54" />
            </TouchableOpacity>
          </View>
          {hiringarr.map((val, ind) => {
            const {name, value} = val;
            const length = hiringarr.length;
            console.log(
              '🚀 ~ file: index.js ~ line 609 ~ {hiringarr.map ~ length',
              length,
              ind,
            );
            return (
              <View style={styles.value}>
                <Text
                  style={{
                    fontSize: 16,
                    color: length - 1 === ind ? '#BC8A48' : '#CBCBCB',
                  }}>
                  {name}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: length - 1 === ind ? '#BC8A48' : '#CBCBCB',
                  }}>
                  {value}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const NoteFun = () => {
    return (
      <View style={{padding: 20}}>
        <View style={{paddingTop: 0}}>
          <Text style={{color: '#707070', fontSize: 16}}>Personal Note</Text>
          <View style={styles.personalNote}></View>
        </View>
      </View>
    );
  };

  const StarsAttribyted = () => {
    return (
      <View style={{margin: 20}}>
        {StarsAttribytedarr.map(val => {
          const {name, image} = val;
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 12, color: '#1C3C54'}}>{name}</Text>
                <Image
                  source={image}
                  resizeMode="contain"
                  style={{width: 50, height: 50, alignItems: 'center'}}
                />
              </View>
              <View
                style={{borderColor: 'rgba(188, 138, 72,0.2)', borderWidth: 1}}
              />
            </>
          );
        })}
      </View>
    );
  };

  const randerCard = id => {
    if (id === 0) {
      return <Summary />;
    } else if (id === 1) {
      return <InterviewFun />;
    } else if (id == 2) {
      return <DocumentFun />;
    } else if (id === 3) {
      return <HiringFun />;
    } else if (id === 4) {
      return <NoteFun />;
    } else if (id === 5) {
      return <AssistanceFun />;
    } else {
      return <StarsAttribyted />;
    }
  };

  return (
    <MainScreen customScreenStyles={{paddingHorizontal: 0}}>
      {/* logoNameStyle={{ width: 340, marginLeft: -20, textAlign: "left" }}  */}

      <View style={styles.cardview}>
        <Text style={styles.name}>Candidate 333P</Text>
        <View style={styles.card}>
          <View>
            <View
              style={{
                height: 100,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="cover"
                source={Images.useriamge.user6}
                style={styles.callerimage}
              />
              <View style={{position: 'absolute', top: 8, bottom: 0, right: 5}}>
                {/* <TouchableOpacity> */}
                <FontAwesome
                  style={styles.planceIcon}
                  name="paper-plane"
                  color="#008037"
                  size={13}
                />
                {/* </TouchableOpacity> */}
              </View>

              <View
                style={{
                  position: 'absolute',
                  top: 40,
                  bottom: 0,
                  right: -15,
                }}>
                <TouchableOpacity>
                  <Entypo
                    style={styles.dotsthree}
                    name="dots-three-vertical"
                    color="#fff"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: 0,
                alignItems: 'baseline',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('VideoDetails')}>
                <Image
                  source={Images.icon.video}
                  resizeMode="contain"
                  style={styles.Youtubeicon}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CV')}>
                <Image
                  source={Images.icon.document}
                  resizeMode="contain"
                  style={styles.icon}
                />
              </TouchableOpacity>

              {/* <TouchableOpacity style={{ alignItems: 'flex-start' }}> */}
              <Image
                source={Images.cv.StarsImages}
                resizeMode="contain"
                style={styles.stars}
              />
              {/* </TouchableOpacity> */}
            </View>
          </View>

          <View style={{flex: 1, marginLeft: 15}}>
            <Text style={styles.city}>Bastien Hallywood </Text>
            <Text style={styles.pilot}>Corporate pilot</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome name="whatsapp" color={'#1C3C54'} size={15} />
                <Text style={{fontSize: 11, color: '#1C3C54', paddingLeft: 5}}>
                  +1 470 273 0654
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <TouchableOpacity style={styles.addtxt}>
                  <Text
                    style={{fontSize: 9, color: '#fff', textAlign: 'center'}}>
                    Call
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Fontisto name="email" color={'#1C3C54'} size={15} />
              <Text
                numberOfLines={1}
                style={{
                  color: '#1C3C54',
                  paddingLeft: 5,
                  fontSize: 11,
                  fontWeight: '600',
                }}>
                Bast56t@leterio.com
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          borderColor: 'rgba(188, 138, 72,0.6)',
          backgroundColor: 'rgba(188, 138, 72,0.1)',
          borderWidth: 0.5,
          marginHorizontal: 20,
        }}
      />

      <View style={{marginTop: 10, marginBottom: 0}}>
        {arr.map((val, ind) => {
          const {icon, name} = val;
          return (
            <View style={{marginBottom: 10}}>
              <View style={styles.view}>
                <Image
                  resizeMode="contain"
                  source={icon}
                  style={{width: 25, height: 25}}
                />
                <Text style={styles.txtname}>{name}</Text>
                <TouchableOpacity
                  style={[
                    styles.addicon,
                    {
                      backgroundColor:
                        iD === ind
                          ? Colors.darkBlueColor
                          : Colors.darkYellowColor,
                      justifyContent: iD === ind ? 'flex-start' : 'center',
                      borderColor:
                        iD === ind
                          ? Colors.darkBlueColor
                          : Colors.darkYellowColor,
                    },
                  ]}
                  onPress={() => handlechange(ind)}>
                  <Text
                    style={[
                      {color: '#fff', fontWeight: 'bold'},
                      {fontSize: iD !== ind ? 15 : 15},
                      {marginTop: iD !== ind ? -2 : 2},
                    ]}>
                    {iD !== ind ? '+' : '-'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderColor: 'rgba(188, 138, 72,0.6)',
                  backgroundColor: 'rgba(188, 138, 72,0.1)',
                  borderWidth: 0.5,
                  marginHorizontal: 20,
                }}
              />
              {ind === iD && randerCard(ind)}
            </View>
          );
        })}
      </View>
    </MainScreen>
  );
};

export default CrewContactSummary;
