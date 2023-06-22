import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, Fonts, Metrics} from '../../theme';

const CustomCheckBox = ({
  Checked,
  onPress,
  title,
  titleColor,
  customMainStyle = {},
  ListCheckbox = false,
  checkListSelectedIds,
}) => {
  return (
    <View style={[styles.checkBoxRow, customMainStyle]}>
      {ListCheckbox ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[
              styles.checkBoxList,
              {
                backgroundColor: Checked
                  ? Colors.darkYellowColor
                  : Colors.white,
                borderColor: Checked
                  ? Colors.darkYellowColor
                  : Colors.lightGrey,
              },
            ]}
            onPress={onPress}>
            <Icon
              size={14}
              style={{color: Checked ? Colors.white : Colors.lightGrey}}
              name="check"
            />
          </TouchableOpacity>
          {title && (
            <Text
              style={[
                {
                  color: titleColor,
                  marginLeft: Metrics.ratio(14),
                  fontFamily: Fonts.type.book,
                  fontSize: Metrics.ratio(14),
                  lineHeight: 22,
                },
              ]}>
              {title}
            </Text>
          )}
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[
              styles.checkBox,
              {
                backgroundColor: Checked
                  ? Colors.darkYellowColor
                  : Colors.white,
              },
            ]}
            onPress={onPress}>
            {Checked ? (
              <Icon size={14} style={{color: Colors.white}} name="check" />
            ) : null}
          </TouchableOpacity>
          <View style={styles.titleRow}>
            <Text style={[styles.titleText, {color: titleColor}]}>{title}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxRow: {},
  checkBoxList: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.ratio(22),
    height: Metrics.ratio(22),
    borderWidth: 2,
    borderRadius: 4,
  },
  checkBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.ratio(22),
    height: Metrics.ratio(22),
    borderWidth: 2,
    borderRadius: 4,
    borderColor: Colors.darkYellowColor,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Metrics.ratio(14),
  },
  titleText: {
    width: Metrics.ratio(280),
    fontFamily: Fonts.type.regular,
    fontSize: Metrics.ratio(14),
    lineHeight: 18,
  },
});
export default CustomCheckBox;
