import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AppButton, MainScreen} from '../../common';
import TextInputNative from '../../components/TextInputNative';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';
import {Colors, Metrics} from '../../theme';
import {useLayoutEffect} from 'react';

const SignIn = ({navigation}) => {
  const [isSendCode, setIsSendCode] = useState(false);
  const [formObj, emailProps, codeProps] = useHookForm(
    ['email', 'code'],
    {},
    isSendCode ? ValidationSchema.logInCode : ValidationSchema.logInEmail,
  );
  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Sign In',
    });
  }, [navigation]);

  const submit = formObj.handleSubmit(values => {
    setIsSendCode(true);
    if (isSendCode && values) {
      NavigationService.navigate('Username');
    }
  });

  return (
    <MainScreen
      customScreenStyles={{
        marginTop: 0,
        // justifyContent: '',
        paddingBottom: Metrics.ratio(150),
      }}>
      <View style={{paddingTop: Metrics.ratio(150)}}>
        {isSendCode ? (
          <TextInputNative
            containerStyle={{marginTop: 0}}
            nextFocusRef={codeProps.forwardRef}
            title={'Code'}
            customPlaceholder={'Enter your code'}
            topSpaceLarge
            {...codeProps}
            placeholderTextColor={Colors.lightGrayColor}
          />
        ) : (
          <>
            <TextInputNative
              containerStyle={{marginTop: 0}}
              nextFocusRef={codeProps.forwardRef}
              title={'E-mail'}
              customPlaceholder={'Enter your email'}
              topSpaceLarge
              {...emailProps}
              placeholderTextColor={Colors.lightGrayColor}
            />
          </>
        )}

        <AppButton
          title={isSendCode ? 'Sign In' : 'Send Code'}
          containerStyle={styles.buttonStyle}
          onPress={submit}
        />

        {isSendCode ? (
          <View style={styles.footer}>
            <Text style={styles.codeText}>Resend a New Code</Text>
          </View>
        ) : (
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don’t have an account?</Text>
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => {
                NavigationService.navigate('JoinNow');
              }}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </MainScreen>
  );
};

export default SignIn;
