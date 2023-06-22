import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import TextInputNative from '../TextInputNative';

const PopUpModal = props => {
  const {
    modalView,
    heading,
    subHeading,
    subHeading1,
    onBackdropPress,
    btnTitle,
    modalSubHeading,
    modalHeading,
    modalBtn,
    isVisible,
    btnonpress,
    nextFocusRef,
    textInputTitle,
    textInputPlaceholder,
  } = props;
  return (
    <Modal onBackdropPress={onBackdropPress} isVisible={isVisible}>
      <View style={[styles.modalView, modalView]}>
        {heading && (
          <View
            style={{
              marginBottom: Metrics.ratio(10),
              marginTop: Metrics.ratio(5),
            }}>
            <Text style={[styles.modalHeading, modalHeading]}>{heading}</Text>
          </View>
        )}
        {subHeading && (
          <Text style={[styles.modalSubHeading, modalSubHeading]}>
            {subHeading}
          </Text>
        )}
        {subHeading1 && (
          <Text style={styles.modalSubHeading1}>{subHeading1}</Text>
        )}
        <TextInputNative
          nextFocusRef={nextFocusRef}
          title={textInputTitle}
          customPlaceholder={textInputPlaceholder}
          topSpaceLarge
          {...nextFocusRef}
          placeholderTextColor={Colors.lightGrayColor}
        />
        {btnTitle && (
          <View>
            <TouchableOpacity
              style={[styles.btn, modalBtn]}
              onPress={btnonpress}>
              <Text style={styles.btnTitle}>{btnTitle}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default PopUpModal;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#fff',
    borderRadius: Metrics.ratio(10),
    paddingBottom: Metrics.ratio(40),
    paddingTop: Metrics.ratio(40),
    paddingHorizontal: Metrics.ratio(30),
    borderWidth: 1,
    borderColor: Colors.darkYellowColor,
    borderRadius: 25,
    marginHorizontal: Metrics.ratio(10),
  },
  modalHeading: {
    fontSize: Metrics.ratio(20),
    fontFamily: Fonts.type.semiBold,
    color: Colors.darkYellowColor,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  modalSubHeading1: {
    fontSize: Metrics.ratio(14),
    color: Colors.darkBlueColor,
    textAlign: 'center',
    marginHorizontal: Metrics.ratio(40),
    lineHeight: Metrics.ratio(20),
  },
  modalSubHeading: {
    fontSize: Metrics.ratio(14),
    color: Colors.darkBlueColor,
    textAlign: 'center',
    marginHorizontal: Metrics.ratio(20),
    lineHeight: Metrics.ratio(20),
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: Colors.darkBlueColor,
    paddingHorizontal: Metrics.ratio(20),
    paddingTop: Metrics.ratio(5),
    paddingBottom: Metrics.ratio(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: Metrics.ratio(30),
  },
  btnTitle: {
    fontSize: Metrics.ratio(14),
    color: Colors.darkBlueColor,
    textAlign: 'center',
    color: Colors.white,
  },
});
