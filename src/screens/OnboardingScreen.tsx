import React, {useState, useEffect} from 'react';
import {NavigationSwitchScreenComponent} from 'react-navigation';
import {ImageSourcePropType} from 'react-native';

import OnbordingBackground from '../components/container/OnbordingContainer';

const images: ImageSourcePropType[] = [
  require('../assets/images/running.png'),
  require('../assets/images/dumbells.png'),
  require('../assets/images/couple.png'),
];

const topText: string[] = [
  'Have a good health',
  'Be stronger',
  'Have nice body',
];

const secondText: string[] = [
  'Being healthy is all, no health is nothing. So why do not we',
  'Take 30 minutes of bodybuilding every day to get physically fit and healthy.',
  'Bad body shape, poor sleep, lack of strength, weight gain, weak bones, easily traumatized body, depressed, stressed, poor metabolism, poor resistance',
];

const Time = 5000;

const OnboardingScreen: NavigationSwitchScreenComponent = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect((): VoidFunction => {
    const timer = setInterval((): void => {
      handleScroll();
    }, Time);
    return (): void => {
      clearInterval(timer);
    };
  }, [index]);

  const handleScroll = (): void => {
    const newIndex: number = index + 1;

    if (newIndex < images.length) {
      return setIndex(newIndex);
    }
    setIndex(0);
  };

  return (
    <OnbordingBackground
      topText={topText[index]}
      secondText={secondText[index]}
      image={images[index]}
      index={index}
    />
  );
};

export default OnboardingScreen;
