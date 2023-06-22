import React from 'react';
import {Text, View} from 'react-native';
import {AppButton} from '../../common';
import {ButtonView} from '../../components';
import TextInputNative from '../../components/TextInputNative';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';

const TestingScreen = () => {
  const [formObj, emailProps, passwordProps] = useHookForm(
    ['email', 'password'],
    {},
    ValidationSchema.logIn,
  );

  const submit = formObj.handleSubmit(values => {
    NavigationService.navigate('Home');
    console.log('values', values);
  });

  return (
    <View style={{marginHorizontal: 20}}>
      <TextInputNative
        nextFocusRef={passwordProps.forwardRef}
        title={'Email'}
        customPlaceholder={'Enter your email'}
        topSpaceLarge
        {...emailProps}
      />
      <TextInputNative
        maxLength={30}
        title={'Password'}
        customPlaceholder={'Enter your password'}
        secureTextEntry
        topSpaceLarge
        {...passwordProps}
      />
      <AppButton
        title="Sign In"
        containerStyle={styles.buttonStyle}
        onPress={submit}
      />
    </View>
  );
};

export default TestingScreen;
