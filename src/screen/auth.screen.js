import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Tts from 'react-native-tts';
import {faker} from '@faker-js/faker';

const createPassword = () => faker.word.adjective() + ' ' + faker.animal.type();
Tts.addEventListener('tts-finish', event => console.log('finish', event));

const AuthScreen = () => {
  const [password, setPassword] = useState(createPassword());

  useEffect(() => {
    if (password) {
      Tts.getInitStatus().then(() => {
        Tts.speak('To login, press mic and say, ' + password);
      });
    }
  }, [password]);

  return (
    <SafeAreaView>
      <Text>Press mic and say</Text>
      <Text>{password}</Text>
    </SafeAreaView>
  );
};

export default AuthScreen;
