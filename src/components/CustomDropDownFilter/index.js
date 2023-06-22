import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {Colors, Fonts, Images, Metrics} from '../../theme';

const CustomDropDownFilter = ({
  editable,
  numberOfLines,
  maxLength,
  onChangeText,
  value,
  styleTextInput,
  options,
  placeholder = 'Multi Options',
  placeholderTextColor = Colors.darkBlueColors,
  isRightStyle,
  arrowDropdownCircle,
  mainStyle,
  imgIcon = Images.icon.arrowDropdownCircle,
  dropdownList,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const handleTextInputChange = text => {
    if (onChangeText) {
      onChangeText(text);
    }
    setInputVal(text);
    setIsDropdownOpen(!!text); // Set isDropdownOpen to true if text is not empty, false otherwise
  };

  const handleOptionPress = option => {
    onChangeText(option);
    setIsDropdownOpen(false);
  };

  const renderOptionItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.optionItem}
      onPress={() => handleOptionPress(item)}>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.customDropDownView}>
      <TouchableOpacity
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
          },
          styles.textInput,
          styleTextInput,

          mainStyle,
        ]}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
        <TextInput
          style={{
            width: '90%',
            fontSize: Fonts.size.size_12,
            textAlignVertical: 'center',
            color: Colors.secondary,
          }}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          onChangeText={handleTextInputChange}
          value={inputVal || value}
        />
        <Image
          source={imgIcon}
          style={[styles.arrowDropdownCircle, arrowDropdownCircle]}
        />
      </TouchableOpacity>
      {isDropdownOpen &&
        !!value && ( // Check if isDropdownOpen is true and value is not empty
          <FlatList
            data={options}
            renderItem={renderOptionItem}
            keyExtractor={item => item.toString()}
            style={[styles.dropdownList, dropdownList]}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  customDropDownView: {
    flex: 1,
    marginVertical: Metrics.ratio(8),
  },
  textInput: {
    borderWidth: 1,
    color: Colors.black,
    width: Metrics.ratio(133),
    borderColor: Colors.lightGrayColor,
    // paddingVertical: Metrics.ratio(11),
    // alignSelf: 'center',
    height: Metrics.ratio(35),
    marginRight: Metrics.ratio(12),
    borderRadius: Metrics.ratio(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  isRight: {
    borderWidth: 1,
    color: Colors.black,
    width: Metrics.ratio(20),
    height: Metrics.ratio(32),
    borderColor: Colors.lightGrayColor,
    paddingVertical: Metrics.ratio(8),
    borderBottomRightRadius: Metrics.ratio(5),
    borderTopRightRadius: Metrics.ratio(5),
    borderLeftWidth: 0,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Colors.white,
  },
  arrowDropdownCircle: {
    width: Metrics.ratio(10),
    height: Metrics.ratio(10),
    resizeMode: 'contain',
  },
  dropdownList: {
    width: Metrics.ratio(110),
    marginTop: Metrics.ratio(5),
    borderWidth: 1,
    borderColor: Colors.lightGrayColor,
    borderRadius: Metrics.ratio(5),
    alignSelf: 'flex-end',
    zIndex: 100,
    position: 'absolute',
    top: 50,
  },
  optionItem: {
    paddingVertical: Metrics.ratio(10),
    paddingHorizontal: Metrics.ratio(15),
    borderWidth: 1,
    borderColor: Colors.lightGrayColor,
    backgroundColor: Colors.white,
  },
  optionText: {
    fontSize: Fonts.size.medium,
    color: Colors.black,
  },
});

export default CustomDropDownFilter;
