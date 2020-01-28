import React, {FC} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const SplashView: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.splashText}>Capi Fitness</Text>
      <ActivityIndicator style={{marginTop: 20}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 139, 97)',
  },
  splashText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SplashView;
