import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

const SignIn: FC = () => (
  <View>
    <Text>Login</Text>
  </View>
);

const SignUp: FC = () => (
  <View>
    <Text>Register</Text>
  </View>
);

export default createStackNavigator({
  Login: SignIn,
  Register: SignUp,
});
