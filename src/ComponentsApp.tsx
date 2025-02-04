import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import { Navigator } from './presentation/navigator/Navigator';

const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
};

export default ComponentsApp;
