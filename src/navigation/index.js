/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Home from '../Home';
import All from '../All';
import Detail from '../Detail';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

// snake case with upper case for constant
export const SCREEN_NAME = {
  HOME: 'Home',
  ALL: 'All',
  DETAIL: 'Detail',
};

export default StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_NAME.HOME}
        headerMode="none"
      // screenOptions={screenProps => ({
      //   headerTitleAlign: 'center',
      //   headerTintColor: 'red',
      //   headerTitleStyle: {
      //     fontSize: 10,
      //   },
      //   headerRight: props => {
      //     if (!screenProps.navigation.canGoBack()) {
      //       return '';
      //     }
      //     return (
      //       <HeaderBackButton
      //         {...props}
      //         onPress={() => {
      //           screenProps.navigation.goBack();
      //         }}
      //       />
      //     );
      //   },
      // })}
      >
        <Stack.Screen name={SCREEN_NAME.HOME} component={Home} />
        <Stack.Screen name={SCREEN_NAME.ALL} component={All} />
        <Stack.Screen name={SCREEN_NAME.DETAIL} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};