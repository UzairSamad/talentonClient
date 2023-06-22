import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import {NavigationService} from '../../utils';

const QuestionariesCard = ({title, totalHours, index, lastIndex}) => {
  console.log('index....', index, lastIndex);
  return (
    <View style={styles.renderItem}>
      <View style={[styles.container, styles.row]}>
        <View style={[styles.column]}>
          <Text style={[styles.valueText, {color: Colors.secondary}]}>
            {title}
          </Text>
          <Text style={[styles.valueText, {color: Colors.darkYellowColor}]}>
            {totalHours}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('Checkout');
          }}>
          <Image style={styles.video} source={Images?.icon.video} />
        </TouchableOpacity>
      </View>
      {index === lastIndex ? null : (
        <View
          style={{
            borderWidth: 0.3,
            borderColor: Colors.darkYellowColor,
            marginTop: Metrics.ratio(4),
            marginBottom: Metrics.ratio(20),
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  valueText: {
    fontSize: Fonts.size.size_12,
    fontFamily: Fonts.type.regular,
    marginVertical: Metrics.ratio(2),
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    width: '80%',
  },
  container: {
    justifyContent: 'space-between',
  },
  renderItem: {
    backgroundColor: Colors.white,
  },
  video: {
    resizeMode: 'cover',
    width: Metrics.ratio(42),
    height: Metrics.ratio(34),
  },
});

export default QuestionariesCard;
