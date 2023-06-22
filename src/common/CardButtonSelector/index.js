import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../theme';

const CardButtonSelector = ({isSelected = false}) => {
  return (
    <View style={styles.renderItem}>
      <View style={[styles.row, styles.container]}>
        <Text
          style={{
            color: Colors.secondary,
            fontSize: Fonts.size.size_15,
            fontFamily: Fonts.type.semiBold,
          }}>
          {'Min Salary Requested'}
        </Text>
        <Text style={[styles.footerText, {color: Colors.darkYellowColor}]}>
          {'Members'}
        </Text>
      </View>
      <View style={styles.underline} />
      <View style={[styles.header, styles.row]}>
        <Text style={[styles.headerText, {color: Colors.secondary}]}>
          {'Passport'}
        </Text>
        <Text style={[styles.headerText, {color: Colors.secondary}]}>
          {'Visa'}
        </Text>
        <Text style={[styles.headerText, {color: Colors.secondary}]}>
          {'Language'}
        </Text>
      </View>

      <View style={[styles.footerBtnView, styles.row]}>
        <TouchableOpacity
          style={[
            styles.footerBtn,
            {
              backgroundColor: isSelected
                ? Colors.offWhiteColor
                : Colors.darkYellowColor,
            },
          ]}>
          <Text
            style={[
              styles.footerText,
              {color: !isSelected ? Colors.white : Colors.secondary},
            ]}>
            {'USA'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerBtn,
            {
              backgroundColor: !isSelected
                ? Colors.offWhiteColor
                : Colors.darkYellowColor,
            },
          ]}>
          <Text
            style={[
              styles.footerText,
              {color: isSelected ? Colors.white : Colors.secondary},
            ]}>
            {'China'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerBtn,
            {
              backgroundColor: !isSelected
                ? Colors.offWhiteColor
                : Colors.darkYellowColor,
            },
          ]}>
          <Text
            style={[
              styles.footerText,
              {color: isSelected ? Colors.white : Colors.secondary},
            ]}>
            {'French'}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.footerBtnView,
          styles.row,
          {marginTop: Metrics.ratio(10)},
        ]}>
        <TouchableOpacity
          style={[
            styles.footerBtn,
            {
              backgroundColor: !isSelected
                ? Colors.offWhiteColor
                : Colors.darkYellowColor,
            },
          ]}>
          <Text
            style={[
              styles.footerText,
              {color: isSelected ? Colors.white : Colors.secondary},
            ]}>
            {'France'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerBtn,
            {
              backgroundColor: !isSelected
                ? Colors.offWhiteColor
                : Colors.darkYellowColor,
            },
          ]}>
          <Text
            style={[
              styles.footerText,
              {color: isSelected ? Colors.white : Colors.secondary},
            ]}>
            {'Italian'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerBtn,
            {
              backgroundColor: !isSelected
                ? Colors.offWhiteColor
                : Colors.darkYellowColor,
            },
          ]}>
          <Text
            style={[
              styles.footerText,
              {color: isSelected ? Colors.white : Colors.secondary},
            ]}>
            {'English'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  renderItem: {},
  valueText: {
    fontSize: Fonts.size.size_12,
    fontFamily: Fonts.type.semiBold,
  },
  row: {
    flexDirection: 'row',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Metrics.ratio(40),
    marginBottom: Metrics.ratio(10),
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: Colors.lightGrayColor,
  },
  header: {
    justifyContent: 'space-between',
    marginHorizontal: Metrics.ratio(10),
    marginVertical: Metrics.ratio(10),
  },
  footerBtnView: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerBtn: {
    borderColor: Colors.darkYellowColor,
    paddingHorizontal: Metrics.ratio(26),
    paddingVertical: Metrics.ratio(7),
    borderRadius: Metrics.ratio(20),
    borderWidth: 1,
  },
  footerText: {
    fontSize: Fonts.size.size_13,
    fontFamily: Fonts.type.regular,
  },
  headerText: {
    fontSize: Fonts.size.size_13,
    fontFamily: Fonts.type.semiBold,
  },
});

export default CardButtonSelector;
