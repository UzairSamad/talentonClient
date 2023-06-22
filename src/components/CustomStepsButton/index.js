import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, Metrics } from '../../theme';

const CustomStepsButton = ({
  steps,
  activeStep,
  isPartialComplete,
  completedIdentifers,
  customStyles,
}) => {
  return (
    <View style={[styles.progressStepsView, customStyles]}>
      {steps.map((step, index) => (
        <View style={{ zIndex: 2 }}>
          <ProgressStep
            index={index + 1}
            step={step}
            isActive={index === activeStep}
            isPartialComplete={isPartialComplete}
            completedIdentifers={completedIdentifers}
          />
        </View>
      ))}
      <View
        style={{
          height: 1,
          backgroundColor: '#000',
          position: 'absolute',
          top: 20,
          left: Metrics.scaleHorizontal(30),
          right: 0,
          width: Metrics.scaleHorizontal(240)
        }}
      />
    </View>
  );
};

const gradientColor = [
  Colors.greenColor,
  Colors.greenColor,
  Colors.darkYellowColor,
  Colors.darkYellowColor,
];

const lightGrayColor = [Colors.lightGrayColor, Colors.lightGrayColor];

const greenColor = [Colors.greenColor, Colors.greenColor];

const ProgressStep = ({
  index,
  step,
  isActive,
  isPartialComplete,
  completedIdentifers,
}) => {
  return (
    <View style={styles.progressStepContainer}>
      {isPartialComplete && index === 3 ? (
        <LinearGradient
          colors={
            isActive
              ? gradientColor
              : step.isCompleted
                ? greenColor
                : lightGrayColor
          }
          style={styles.progressSteps}
          start={{
            x: isPartialComplete == 'fully' ? 1 : 0,
            y: isPartialComplete == 'fully' ? 1 : 0.5,
          }}
          end={{ x: 1, y: isPartialComplete == 'fully' ? 1 : 0.5 }}>
          <Text
            style={{
              color: Colors.white,
            }}>
            {index}
          </Text>
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.progressSteps,
            {
              backgroundColor: isActive
                ? Colors.darkYellowColor
                : completedIdentifers?.includes(step.stepValue)
                  ? Colors.greenColor
                  : Colors.lightGrayColor,
              borderColor: isActive ? Colors.darkYellowColor : Colors.darkGray,
            },
          ]}>
          <Text
            style={{
              color: Colors.white,
            }}>
            {index}
          </Text>
        </View>
      )}
      <View style={styles.titleRow}>
        <Text
          style={[
            styles.titleText,
            {
              color:
                isActive || completedIdentifers?.includes(step.stepValue)
                  ? Colors.blueishGray
                  : Colors.lightGrayColor,
            },
          ]}>
          {step.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressStepsView: {
    flexDirection: 'row',
    height: 70,
    flex:1,
  },
  progressStepContainer: {
    justifyContent: 'space-between',
    alignItems:'center',
    marginRight:Metrics.scaleHorizontal(60),
  },
  progressSteps: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
    borderWidth: 1,
    borderRadius: Metrics.ratio(20),
  },
  titleRow: { marginTop: 10 },
  titleText: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_11,
  },
});
export default CustomStepsButton;
