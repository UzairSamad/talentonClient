import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Colors, Fonts, Images, Metrics} from '../../theme';

const SuccessModal = props => {
  const {
    modalView,
    onBackdropPress,
    btnTitle,
    modalBtn,
    isVisible,
    btnonpress,
  } = props;
  return (
    <Modal onBackdropPress={onBackdropPress} isVisible={isVisible}>
      <View style={[styles.modalView, modalView]}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image source={Images.icon.like} style={styles.imgHand} />
        </View>
        <Text
          style={[
            styles.text,
            {fontSize: Fonts.size.size_26, marginVertical: Metrics.ratio(20)},
          ]}>
          {'Alert Successfully Sent'}
        </Text>
        <Text style={[styles.text1, {width: Metrics.ratio(280)}]}>
          {'An alert has been sent to candidate xxxxxxx '}
        </Text>
        <Text style={[styles.text1, {marginTop: Metrics.ratio(20)}]}>
          {
            ' You will receive a notification on your app as soon as the candidate confirm.'
          }
        </Text>

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

export default SuccessModal;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#fff',
    borderRadius: Metrics.ratio(10),
    paddingBottom: Metrics.ratio(50),
    paddingTop: Metrics.ratio(50),
    paddingHorizontal: Metrics.ratio(30),
    borderWidth: 1,
    borderColor: Colors.darkYellowColor,
    borderRadius: 25,
    marginHorizontal: Metrics.ratio(10),
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
    textAlign: 'center',
    color: Colors.white,
  },
  imgHand: {
    width: Metrics.ratio(164),
    height: Metrics.ratio(164),
    resizeMode: 'contain',
  },
  text: {
    color: Colors.darkYellowColor,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: Fonts.type.semiBold,
  },
  text1: {
    color: Colors.darkBlueColor,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_15,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
