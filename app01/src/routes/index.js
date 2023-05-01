import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../aplications/HomeScreen';
import BMI from '../../aplications/app01-bmi';
import tasks from '../../aplications/app02-tasks';
import forms from '../../aplications/app03-forms';
import Maps from '../../aplications/app04-maps';
import MaskText from '../../aplications/app05-masktext';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Body Mass Index" component={BMI} />
        <Stack.Screen name="Tasks" component={tasks} />
        <Stack.Screen name="Forms" component={forms} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="MaskText" component={MaskText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({})