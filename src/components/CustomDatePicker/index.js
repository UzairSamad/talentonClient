import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CustomDatePicker = ({
  title,
  date,
  datePicker,
  onDateSelected,
  showDatePicker,
  textStyle,
  datePickerContainerStyle,
  mode = 'date',
  imgSource = Images.icon.Calender,
  hideDatePicker,
}) => {
  console.log(date, 'dateStart');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.MainContainer}>
        {datePicker && (
          <DateTimePickerModal
            isVisible={datePicker}
            value={date || new Date()}
            mode={mode}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            style={styles.datePicker}
            onConfirm={onDateSelected}
            onCancel={hideDatePicker}
            locale="en"
          />
        )}

        <View style={[styles.datePickerContainer, datePickerContainerStyle]}>
          {date ? (
            <Text style={[{fontSize: Fonts.size.size_15}, textStyle]}>
              {date?.toDateString()}
            </Text>
          ) : (
            <Text style={[{fontSize: Fonts.size.size_15}, textStyle]}>
              {title}
            </Text>
          )}
          <TouchableOpacity style={styles.pickerView} onPress={showDatePicker}>
            <Image source={imgSource} style={styles.picker} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  datePickerContainer: {
    paddingVertical: Metrics.ratio(15, 15),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: Metrics.ratio(15),
    borderWidth: 1,
    borderColor: Colors.lightGrayColor,
    borderRadius: Metrics.ratio(8),
    backgroundColor: Colors.white,
  },
  picker: {
    width: Metrics.ratio(18),
    height: Metrics.ratio(18),
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
});
export default CustomDatePicker;
