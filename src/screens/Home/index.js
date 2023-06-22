/** @format */

import React, {useLayoutEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Colors, Images} from '../../theme';
import styles from './styles';
import {AppButton, MainScreen} from '../../common';
import {PopUpModal} from '../../components';
import NavigationService from '../../utils/NavigationService';
import {ValidationSchema, useHookForm} from '../../utils/ValidationUtil';
import {DataHandler} from '../../utils';

export default function Home({navigation}) {
  const [showmodal, setShowModal] = useState(false);

  useLayoutEffect(() => {
    navigation.setParams({
      title: 'Jhon Doe',
    });
  }, [navigation]);

  const [formObj, projectNameProps] = useHookForm(
    ['projectName'],
    {},
    ValidationSchema.projectName,
  );

  const onCreate = formObj.handleSubmit(values => {
    NavigationService.navigate('Contract');
    setShowModal(false);
  });

  const LogoTextContainer = () => {
    return (
      <View style={styles.innerConatainer}>
        <Image style={styles.logo} source={Images.icon.talentonLogo} />
        <Text style={[styles.header]}>TALENTON</Text>
        <Text style={[styles.subHeader]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
    );
  };

  const onRecruitement = () => {
    DataHandler.setInititalRouteNameForBottomTab('Project');
    setTimeout(() => {
      NavigationService.navigate('Home');
    }, 1000);
  };

  const onSubmit = () => {
    DataHandler.setInititalRouteNameForBottomTab('Short List');
    setShowModal(true);
  };

  const Footer = () => {
    return (
      <View style={styles.buttonStyleView}>
        <AppButton
          title="Manage Recruitment Project"
          onPress={onRecruitement}
          containerStyle={[styles.buttonStyle]}
        />

        <AppButton
          title="I need Candidates"
          containerStyle={[
            styles.buttonStyle,
            {
              backgroundColor: Colors.secondary,
            },
          ]}
          onPress={onSubmit}
        />
      </View>
    );
  };

  return (
    <MainScreen style={styles.container}>
      {LogoTextContainer()}
      {Footer()}
      <PopUpModal
        isVisible={showmodal}
        onBackdropPress={() => setShowModal(false)}
        heading="Create a new project"
        btnTitle="Create"
        nextFocusRef={projectNameProps}
        textInputTitle="Name Your Project"
        textInputPlaceholder="Project name"
        btnonpress={onCreate}
      />
    </MainScreen>
  );
}
