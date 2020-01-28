import React, {FC} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import AuthNavigator from './AuthNavigator';
import SplashScreen from '../screens/SplashScreen';

const Home: FC = () => (
  <SafeAreaView>
    <View>
      <Text>Home</Text>
    </View>
  </SafeAreaView>
);

const Settings: FC = () => (
  <SafeAreaView>
    <View>
      <Text>Settings</Text>
    </View>
  </SafeAreaView>
);

const AppNavigator = createSwitchNavigator(
  {
    Home,
    Settings,
    Auth: AuthNavigator,
    Splash: SplashScreen,
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AppNavigator);
