import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import CardButtonSelector from '../CardButtonSelector';

const CandidateCard = ({distance, city, totalHours, picHours, typeRatings}) => {
  return (
    <View style={styles.renderItem}>
      <View>
        <View style={[styles.row, styles.container]}>
          <Text style={([styles.valueText], {color: Colors.darkYellowColor})}>
            {'Distance'}
          </Text>
          <Text style={([styles.valueText], {color: Colors.secondary})}>
            {distance}
          </Text>
        </View>
        <View style={[styles.row, styles.container]}>
          <Text style={([styles.valueText], {color: Colors.darkYellowColor})}>
            {'City'}
          </Text>
          <Text style={([styles.valueText], {color: Colors.darkYellowColor})}>
            {city}
          </Text>
        </View>
        <View style={[styles.row, styles.container]}>
          <Text style={([styles.valueText], {color: Colors.darkYellowColor})}>
            {'Total Hours'}
          </Text>
          <Text style={([styles.valueText], {color: Colors.secondary})}>
            {totalHours}
          </Text>
        </View>
        <View style={[styles.row, styles.container]}>
          <Text style={([styles.valueText], {color: Colors.darkYellowColor})}>
            {'PIC Hours'}
          </Text>
          <Text style={([styles.valueText], {color: Colors.secondary})}>
            {picHours}
          </Text>
        </View>
        <View style={[styles.row, styles.container]}>
          <Text style={([styles.valueText], {color: Colors.darkYellowColor})}>
            {'Type Ratings'}
          </Text>
          <Text
            style={
              ([styles.valueText],
              {color: Colors.secondary, width: Metrics.ratio(110)})
            }>
            {typeRatings}
          </Text>
        </View>
      </View>
      <CardButtonSelector isSelected={false} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  renderItem: {
    backgroundColor: Colors.white
  }
});

export default CandidateCard;
