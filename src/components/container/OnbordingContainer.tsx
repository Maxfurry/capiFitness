import React, {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

import {NavigationInjectedProps, withNavigation} from 'react-navigation';

interface Props extends Pick<NavigationInjectedProps, 'navigation'> {
  topText: string;
  image: ImageSourcePropType;
  secondText: string;
  index: number;
}

const {width, height} = Dimensions.get('window');

const Background: FC<Props> = ({
  navigation,
  topText,
  image,
  secondText,
  index,
}: Props) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.firstCircle}>
          <View style={styles.secondCircle}>
            <View style={styles.thirdCircle}>
              <View style={styles.fourthCircle}>
                <Text style={styles.topText}>{topText}</Text>
                <Image source={image} style={styles.img} />
              </View>
            </View>
          </View>
        </View>
        <View style={{position: 'absolute', bottom: 0}}>
          <Text style={styles.secondText}>{secondText}</Text>
          <View style={styles.tinyCircleContainer}>
            <View
              style={[
                styles.tinyCircle,
                index === 0 && styles.tinyCircleActive,
              ]}
            />
            <View
              style={[
                styles.tinyCircle,
                index === 1 && styles.tinyCircleActive,
              ]}
            />
            <View
              style={[
                styles.tinyCircle,
                index === 2 && styles.tinyCircleActive,
              ]}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 139, 97)',
    alignItems: 'center',
    color: '#fff',
  },
  firstCircle: {
    backgroundColor: 'rgb(255, 171, 141)',
    width: width * 1.5,
    height: width * 2,
    borderRadius: width,
    marginBottom: height / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondCircle: {
    backgroundColor: 'rgb(255, 219, 204)',
    width: width * 1.4,
    height: width * 2,
    borderRadius: width,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdCircle: {
    backgroundColor: 'rgb(255, 247, 243)',
    width: width * 1.2,
    height: width * 2,
    borderRadius: width,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fourthCircle: {
    backgroundColor: 'rgb(255, 255, 255)',
    width: (width * 3) / 4,
    height: (width * 3) / 4,
    borderRadius: (width * 3) / 8,
    marginTop: 400,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  img: {
    position: 'absolute',
    bottom: -8,
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  topText: {
    position: 'absolute',
    top: 5,
    textAlign: 'center',
    color: 'rgb(255, 139, 97)',
    fontSize: 20,
  },
  secondText: {
    color: '#fff',
    marginBottom: '10%',
    width: 270,
    textAlign: 'center',
  },
  tinyCircleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
    alignSelf: 'center',
    marginBottom: '20%',
  },
  tinyCircle: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 199, 176)',
    borderRadius: 5,
  },
  tinyCircleActive: {
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    width: '120%',
    alignSelf: 'center',
    marginBottom: '10%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(255, 139, 97)',
    fontSize: 20,
  },
});

export default withNavigation(Background);
