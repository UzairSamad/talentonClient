import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import TextInputNative from '../TextInputNative';

const FilterModal = props => {
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: Metrics.ratio(30),
          }}>
          <View>
            <Image source={Images.icon.cross} style={styles.imgHand} />
            <Image source={Images.icon.leftHand} style={styles.imgHand} />
            <Text style={styles.text}>{'On my list'}</Text>
            <Text style={styles.text1}>{'MAYBE'}</Text>
          </View>

          <View>
            <Image source={Images.icon.thinkFace} style={styles.imgHand} />
            <Image source={Images.icon.rightHand} style={styles.imgHand} />
            <Text style={[styles.text, {textAlign: 'right'}]}>
              {'No for now'}
            </Text>
            <Text style={[styles.text1, {textAlign: 'right'}]}>
              {'NEXT TIME'}
            </Text>
          </View>
        </View>

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

export default FilterModal;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#fff',
    borderRadius: Metrics.ratio(10),
    paddingBottom: Metrics.ratio(30),
    paddingTop: Metrics.ratio(20),
    paddingHorizontal: Metrics.ratio(40),
    borderWidth: 1,
    borderColor: Colors.darkYellowColor,
    borderRadius: 25,
    marginHorizontal: Metrics.ratio(30),
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
    textAlign: 'center',
    color: Colors.white,
  },
  imgHand: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    resizeMode: 'contain',
  },
  text: {
    fontSize: Metrics.ratio(14),
    color: Colors.darkYellowColor,
  },
  text1: {
    fontSize: Metrics.ratio(14),
    color: Colors.darkBlueColor,
  },
});
