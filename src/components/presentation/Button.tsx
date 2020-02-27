import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  buttonText: string;
  onPress(): void;
  buttonStyle?: object;
  buttonTextStyle?: object;
  activeOpacity?: number;
}

const Button = ({
  buttonText,
  onPress,
  buttonStyle = {},
  buttonTextStyle = {},
  activeOpacity = 0.7,
}: Props): JSX.Element => (
  <TouchableOpacity
    style={{...styles.button, ...buttonStyle}}
    onPress={() => onPress()}
    activeOpacity={activeOpacity}>
    <Text style={{...styles.buttonText, ...buttonTextStyle}}>{buttonText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
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

export default Button;
