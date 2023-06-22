import configureStore from './store';
import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import DataHandler from './utils/DataHandler';
import NetworkInfo from './utils/NetworkInfo';
import AppNavigator from './naviagtor';
import {Provider} from 'react-redux';
import {CustomSplashScreen} from './screens';
import { Colors } from './theme';
const App = () => {
  // set store state
  const [storeState, setStore] = useState(null);

  // when store is configured
  const onStoreConfigure = store => {
    //init things

    DataHandler.setStore(store);
    NetworkInfo.addNetInfoListener();

    setTimeout(() => {
      setStore(store);
    }, 3000);
    // set store state

    // hide splash
    //SplashScreen.hide();
  };

  useEffect(() => {
    // configure store
    configureStore(onStoreConfigure);

    // unscribe to all things on unmount
    return () => {
      NetworkInfo.removeNetInfoListener();
    };
  }, []);

  if (storeState === null) {
    return <></>;
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Provider store={storeState}>
        <StatusBar backgroundColor={Colors.darkBlueColor} />
        <AppNavigator />
      </Provider>
    </View>
  );
};

export default App;
