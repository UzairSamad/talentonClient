import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Colors, Fonts, Images, Metrics} from '../../theme';

const PopupMenu = ({
  data,
  onActice,
  onSelected,
  lastIndex,
  index,
  onCancel,
}) => {
  return (
    <View style={styles.renderItem}>
      <TouchableWithoutFeedback
        onPress={onCancel}
        style={[styles.row, {backgroundColor: Colors.darkYellowColor}]}>
        <Image source={Images.icon.Edit} style={styles.img} />
        <Text style={[styles.text, {color: Colors.white}]}>Edit</Text>
      </TouchableWithoutFeedback>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: Colors.darkYellowColor,
        }}
      />
      <TouchableWithoutFeedback
        onPress={onCancel}
        style={[styles.row, {backgroundColor: Colors.white}]}>
        <Image source={Images.icon.copy} style={styles.img} />
        <Text style={[styles.text, {color: Colors.gray40}]}>Copy</Text>
      </TouchableWithoutFeedback>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: Colors.darkYellowColor,
        }}
      />
      <TouchableWithoutFeedback
        onPress={onCancel}
        style={[styles.row, {backgroundColor: Colors.white}]}>
        <Image source={Images.icon.delete} style={styles.img} />
        <Text style={[styles.text, {color: Colors.gray40}]}>Cancel</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  renderItem: {
    flex: 1,
    borderWidth: 1,
    position: 'absolute',
    right: 5,
    zIndex: 10,
    width: Metrics.ratio(100),
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: Metrics.ratio(14),
    height: Metrics.ratio(15),
    resizeMode: 'contain',
  },
  text: {
    marginLeft: Metrics.ratio(8),
    fontSize: Fonts.size.size_12,
    fontFamily: Fonts.type.semiBold,
  },
});

export default PopupMenu;
