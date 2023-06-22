import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../theme';

const InterviewScheduleCard = ({data, onDeSelected, onSelected, lastIndex, index}) => {
  return (
    <View>
      <View style={[styles.renderItem, styles.row]}>
        <View
          style={{
            width: '80%',
          }}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={[styles.row, styles.container, {justifyContent: 'space-between'}]}>
            <Text
              style={[
                styles.valueText,
                // {color: Colors.secondary, width: Metrics.ratio(150)},
              ]}>
              {'Interview Date'}
            </Text>
            <Text style={[styles.valueText, {color: Colors.darkYellowColor}]}>
              {data?.interviewDate}
            </Text>
          </View>
          <View style={[styles.row, styles.container, {justifyContent: 'space-between'}]}>
            <Text
              style={[
                styles.valueText,
                // {color: Colors.secondary, width: Metrics.ratio(150)},
              ]}>
              {'Interview Video'}
            </Text>
            <Text style={[styles.valueText, {color: Colors.darkYellowColor}]}>
              {data?.interviewVideo}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: '10%',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.redColor,
              width: Metrics.ratio(15),
            }}
            onPress={onDeSelected}>
            <Image source={Images.icon.close} style={styles.close} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: Metrics.ratio(44),
              marginTop: Metrics.ratio(10)
            }}
            onPress={onSelected}>
            <Image source={Images.icon.PlusBold} style={styles.PlusBold} />
          </TouchableOpacity>
        </View>
      </View>
      {index === lastIndex ? null : (
        <View
          style={{
            borderBottomWidth: 0.5,
            // marginHorizontal: Metrics.ratio(28),
              marginTop: -Metrics.ratio(12),
              borderColor: Colors.darkYellowColor,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  renderItem: {
    paddingTop: Metrics.ratio(15),
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.scaleHorizontal(5)
  },
  row: {
    flexDirection: 'row',
  },
  close: {
    width: Metrics.ratio(15),
    height: Metrics.ratio(15),
    resizeMode: 'contain',
  },
  PlusBold: {
    width: Metrics.ratio(60),
    height: Metrics.ratio(60),
    resizeMode: 'contain',
  },
  name: {
    color: Colors.secondary,
    fontFamily: Fonts.type.semiBold,
    fontSize: Metrics.ratio(14),
    textTransform: 'uppercase',
    marginBottom: Metrics.ratio(5),
  },
  valueText: {
    fontSize: Fonts.size.size_11,
    fontFamily: Fonts.type.regular,
  },
  container: {
    alignItems: 'center',
    paddingVertical: Metrics.ratio(3),
  },
});

export default InterviewScheduleCard;
