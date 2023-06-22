import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../theme';

const CustomCard = ({data, isSelected, onSelected, index}) => {
  console.log('index', index);
  return (
    <View>
      <View
        style={[
          styles.renderItem,
          {
            backgroundColor: !index ? Colors.offWhiteColor : Colors.white,
          },
        ]}>
        <View style={{flexDirection: 'column'}}>
          <Image source={data.picture} style={styles.picture} />
          <View style={styles.imgView}>
            <Image source={Images.icon.video} style={styles.img} />
            <Image
              source={Images.icon.info}
              style={[
                styles.img,
                {marginLeft: -Metrics.ratio(28), height: Metrics.ratio(27)},
              ]}
            />
            <Image
              source={Images.icon.stars}
              style={[styles.img, {height: Metrics.ratio(20)}]}
            />
          </View>
        </View>
        <View
          style={[
            {
              flexDirection: 'column',
              marginLeft: Metrics.ratio(20),
              paddingRight: Metrics.ratio(35),
              width: Metrics.ratio(185),
            },
          ]}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={[styles.row, styles.container]}>
            <Text style={[styles.valueText, {color: Colors.secondary}]}>
              {'Crew Distance'}
            </Text>
            <Text style={[styles.valueText, {color: Colors.darkYellowColor}]}>
              {data?.crewDistance}
            </Text>
          </View>
          <View style={[styles.row, styles.container]}>
            <Text style={[styles.valueText, {color: Colors.secondary}]}>
              {'CFA Experience'}
            </Text>
            <Text style={[styles.valueText, {color: Colors.darkYellowColor}]}>
              {data?.cfAExperience}
            </Text>
          </View>
          <View style={[styles.row, styles.container]}>
            <Text style={[styles.valueText, {color: Colors.secondary}]}>
              {'Min Salary'}
            </Text>
            <Text style={[styles.valueText, {color: Colors.darkYellowColor}]}>
              {data?.minSalary}
            </Text>
          </View>
          <TouchableOpacity
            style={{alignSelf: 'flex-end', marginRight: -Metrics.ratio(60)}}
            onPress={onSelected}>
            {isSelected ? (
              <Image source={Images.icon.MinusBold} style={styles.PlusBold} />
            ) : (
              <Image source={Images.icon.PlusBold} style={styles.PlusBold} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          marginHorizontal: Metrics.ratio(28),
          borderColor: Colors.darkYellowColor,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  renderItem: {
    flexDirection: 'row',
    paddingTop: Metrics.ratio(15),
    paddingHorizontal: Metrics.ratio(28),
  },
  row: {
    flexDirection: 'row',
  },
  imgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    resizeMode: 'contain',
    marginHorizontal: Metrics.ratio(1),
  },
  picture: {
    width: Metrics.ratio(140),
    height: Metrics.ratio(100),
    resizeMode: 'contain',
    borderRadius: 5,
  },
  whatsapp: {
    width: Metrics.ratio(12),
    height: Metrics.ratio(12),
    resizeMode: 'contain',
  },
  emailImg: {
    width: Metrics.ratio(12),
    height: Metrics.ratio(12),
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
    paddingTop: Metrics.ratio(20),
    paddingBottom: Metrics.ratio(5),
  },
  type: {
    color: Colors.secondary,
    fontFamily: Fonts.type.regular,
    fontSize: Metrics.ratio(10),
    paddingBottom: Metrics.ratio(5),
  },
  valueText: {
    fontSize: Fonts.size.size_11,
    fontFamily: Fonts.type.regular,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Metrics.ratio(2),
  },
});

export default CustomCard;
