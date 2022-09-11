import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {faker} from '@faker-js/faker';

const createPassword = () => faker.word.adjective() + ' ' + faker.animal.type();

const AuthScreen = () => {
  const [password, setPassword] = useState(createPassword());

  return (
    <SafeAreaView>
      <Text>Press mic and say</Text>
      <Text>{password}</Text>
    </SafeAreaView>
  );
};

export default AuthScreen;
