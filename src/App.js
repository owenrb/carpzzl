/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';

import AuthScreen from './screen/auth.screen';
import HomeScreen from './screen/home.screen';

const Stack = createNativeStackNavigator();

const App = props => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {props.auth.isAuth ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{headerShown: false}}
              component={AuthScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  //console.log({ state })
  return {auth: state.auth};
};

export default connect(mapStateToProps)(App);
