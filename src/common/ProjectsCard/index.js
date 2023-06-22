import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import PopupMenu from '../PopupMenu';

const ProjectsCard = ({
  data,
  onActice,
  onSelected,
  lastIndex,
  index,
  isNotified = false,
  currentIndex,
}) => {
  console.log(currentIndex, 'currentIndex');
  const [isShowPopup, setIsShowPopup] = useState(null);
  const handleActive = () => {
    setIsShowPopup(currentIndex);
  };
  return (
    <View>
      <View
        style={[
          styles.renderItem,
          styles.row,
          {
            backgroundColor: !index ? Colors.offWhiteColor : Colors.white,
          },
        ]}>
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <View style={styles.valueTextView}>
            <Text style={[styles.valueText, {color: Colors.darkBlueColor}]}>
              {'Project Name'}
            </Text>
          </View>
          <View style={[styles.valueTextView]}>
            <Text style={[styles.valueText, {color: Colors.darkBlueColor}]}>
              {'Full-time '}
            </Text>
          </View>
          <View style={styles.valueTextView}>
            <Text style={[styles.valueText, {color: Colors.darkBlueColor}]}>
              {'Industry'}
            </Text>
          </View>
        </View>
        <View style={[{width: '50%'}, styles.center]}>
          <Text style={[styles.valueText, {color: Colors.darkBlueColor}]}>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.darkBlueColor,
              width: Metrics.ratio(50),
              marginRight: Metrics.ratio(5),
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: Metrics.ratio(5),
              borderRadius: Metrics.ratio(5),
            }}
            onPress={handleActive}>
            <Text style={[styles.btnText, {color: Colors.white, padding: 4}]}>
              {'Action'}
            </Text>
          </TouchableOpacity>
          {isShowPopup === currentIndex && (
            <PopupMenu onCancel={() => setIsShowPopup(false)} />
          )}
          {data?.isSelected ? null : (
            <View>
              {isNotified ? null : (
                <View
                  style={{
                    backgroundColor: Colors.redColor,
                    width: Metrics.ratio(14),
                    height: Metrics.ratio(14),
                    borderRadius: Metrics.ratio(7),
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    zIndex: 1,
                    right: 6,
                    top: 2,
                  }}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontSize: Fonts.size.size_9,
                    }}>
                    3
                  </Text>
                </View>
              )}
              <TouchableOpacity style={{}} onPress={onSelected}>
                <Image source={Images.icon.bellIcon} style={styles.PlusBold} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {index === lastIndex ? null : (
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: Colors.darkYellowColor,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  renderItem: {
    paddingVertical: Metrics.ratio(20),
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.ratio(28),
  },
  row: {
    flexDirection: 'row',
  },
  PlusBold: {
    width: Metrics.ratio(60),
    height: Metrics.ratio(60),
    resizeMode: 'contain',
  },
  valueTextView: {
    borderWidth: 1,
    borderRadius: Metrics.ratio(5),
    borderColor: Colors.darkYellowColor,
    paddingHorizontal: Metrics.ratio(10),
    paddingVertical: Metrics.ratio(5),
  },
  valueText: {
    fontSize: Fonts.size.size_12,
    fontFamily: Fonts.type.semiBold,
    lineHeight: 14
  },
  center: {
    borderWidth: 1,
    borderRadius: Metrics.ratio(5),
    borderColor: Colors.darkYellowColor,
    paddingHorizontal: Metrics.ratio(15),
    paddingVertical: Metrics.ratio(5),
  },
  btnText: {
    fontSize: Fonts.size.size_9,
    fontFamily: Fonts.type.regular,
  },
  container: {
    alignItems: 'center',
    paddingVertical: Metrics.ratio(3),
  },
});

export default ProjectsCard;
