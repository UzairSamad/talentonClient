import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {AppButton, HeaderRightIcon, MainScreen} from '../../common';
import {ButtonView, CustomCheckBox, CustomStepsButton} from '../../components';
import TextInputNative from '../../components/TextInputNative';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {Colors, Images, Metrics} from '../../theme';

const JoinNow = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Join Now',
    });
    navigation.setOptions({
      headerRight: () => <HeaderRightIcon image={Images.icon.phone} />,
    });
  }, [navigation]);

  const [
    formObj,
    nameProps,
    emailProps,
    phoneProps,
    companyNameProps,
    designationProps,
  ] = useHookForm(
    ['name', 'email', 'phone', 'compnany', 'designation'],
    {},
    ValidationSchema.signup,
  );

  const submit = formObj.handleSubmit(values => {
    console.log('values', values);
    if (values) {
      setActiveStep(1);
    }
  });

  const onCheck = () => {
    setIsChecked(!isChecked);
  };

  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {title: 'Sign Up', isCompleted: false},
    {title: `Term & Conditions`, isCompleted: false},
    {title: 'User Profile', isCompleted: true},
  ];

  console.log('activeStep', activeStep);

  useEffect(() => {
    if (activeStep > 2) {
      setActiveStep(2);
    }
  }, [activeStep]);

  const SignupView = () => {
    return (
      <View>
        <TextInputNative
          title={'Full Name'}
          customPlaceholder={'Enter your name'}
          topSpaceLarge
          {...nameProps}
        />
        <TextInputNative
          nextFocusRef={emailProps.forwardRef}
          title={'E-mail'}
          customPlaceholder={'Enter your email'}
          topSpaceLarge
          {...emailProps}
        />
        <TextInputNative
          nextFocusRef={phoneProps.forwardRef}
          maxLength={30}
          title={'Phone'}
          keyboardType="numeric"
          customPlaceholder={'Enter your phone number'}
          topSpaceLarge
          {...phoneProps}
        />
        <TextInputNative
          nextFocusRef={companyNameProps.forwardRef}
          maxLength={30}
          title={'Company Name'}
          customPlaceholder={'Enter your Company Name'}
          topSpaceLarge
          {...companyNameProps}
        />
        <TextInputNative
          nextFocusRef={designationProps.forwardRef}
          maxLength={30}
          title={'Designation'}
          customPlaceholder={'Enter your Designation'}
          topSpaceLarge
          {...designationProps}
          bottomSpaceLarge
          containerStyle={{marginBottom: Metrics.ratio(20)}}
        />
        <AppButton
          title="Next"
          containerStyle={styles.buttonStyle}
          onPress={submit}
        />
      </View>
    );
  };

  const TermsAndCondtionsView = () => {
    return (
      <View style={styles.TermsAndCondtionsView}>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Text style={styles.text}>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </Text>
        <Text style={styles.text}>
          It was popularized in the 1960s with the release of Letraset sheets
          containing.
        </Text>
        <View style={styles.checkboxView}>
          <CustomCheckBox
            Checked={isChecked}
            onPress={onCheck}
            title={'Please accept terms and conditions before move forward'}
            titleColor={Colors.secondary}
            customMainStyle={{flexDirection: 'row', alignItems: 'center'}}
          />
        </View>
        {isChecked ? (
          FooterView()
        ) : (
          <View style={{marginTop: Metrics.ratio(20)}} />
        )}
      </View>
    );
  };

  const FooterView = () => {
    return (
      <View
        style={{
          marginTop: Metrics.ratio(20),
        }}>
        <AppButton
          title="Take me to the Home"
          containerStyle={[styles.buttonStyleFooterView, {}]}
          textStyle={{}}
          onPress={() => {
            NavigationService.navigate('Username');
          }}
        />
      </View>
    );
  };

  const EmptyScreen = () => {
    return (
      <View>
        <Text>EmptyScreen</Text>
      </View>
    );
  };

  const MainView = () => {
    if (activeStep === 1) {
      return <>{TermsAndCondtionsView()}</>;
    } else if (activeStep === 2) {
      return <>{EmptyScreen()}</>;
    } else {
      return <>{SignupView()}</>;
    }
  };

  const stylesTErm = activeStep === 1 && {
    paddingTop: isChecked ? Metrics.ratio(30) : Metrics.ratio(0),
    paddingBottom: isChecked ? Metrics.ratio(0) : Metrics.ratio(136),
  };

  const stylesSign = activeStep === 0 && {
    marginTop: Metrics.ratio(15),
  };

  return (
    <MainScreen isJustifyCenter={false}>
      <View style={styles.main}>
        <CustomStepsButton steps={steps} activeStep={activeStep} />
      </View>
      {MainView()}
    </MainScreen>
  );
};

export default JoinNow;
