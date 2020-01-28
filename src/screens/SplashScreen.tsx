import React, {useEffect} from 'react';
import {
  NavigationSwitchScreenComponent,
  NavigationSwitchScreenProps,
} from 'react-navigation';

import SplashView from '../components/container/SplashContainer';

const SplashScreen: NavigationSwitchScreenComponent = ({
  navigation,
}: NavigationSwitchScreenProps) => {
  useEffect(() => {
    loadResources();
  }, []);

  async function loadResources(): Promise<void> {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }

  return <SplashView />;
};

export default SplashScreen;
