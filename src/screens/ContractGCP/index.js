import React, {useLayoutEffect} from 'react';
import {Text, View, ScrollView, Image, TextInput} from 'react-native';
import {AppButton, HeaderBack, HeaderRightIcon, MainScreen} from '../../common';
import {Images, Metrics} from '../../theme';
import styles from './styles';
import {NavigationService} from '../../utils';

const ContractGCP = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBack />,
      headerRight: () => <HeaderRightIcon image={Images.tab.homeIcon} />,
    });
    navigation.setParams({
      title: 'Contract',
    });
  }, [navigation]);

  return (
    <MainScreen
      customScreenStyles={{
        // justifyContent: '',
        paddingHorizontal: Metrics.ratio(10),
      }}>
      <View
        style={{
          flex: 1,
          marginHorizontal: Metrics.ratio(10),
          paddingBottom: Metrics.ratio(10),
        }}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={{paddingHorizontal: 15}}>
            <View style={styles.child_1}>
              <Text style={styles.Heading}>Event Investment Contract </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View>
                <Image
                  resizeMode="contain"
                  style={styles.pdf}
                  source={Images.cv.ContractImage}
                />
              </View>
            </View>
            <View style={styles.child_2}>
              <View>
                <AppButton
                  containerStyle={styles.btn}
                  textStyle={styles.title}
                  title="PDF"
                />
              </View>

              <View>
                <Text style={styles.text}>Signature</Text>
                <TextInput style={styles.signature}> </TextInput>
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <AppButton
              containerStyle={styles.btn1}
              title="Accepted"
              onPress={() => {
                NavigationService.navigate('SelectIndustry');
              }}
            />
          </View>
        </ScrollView>
      </View>
    </MainScreen>
  );
};

export default ContractGCP;
