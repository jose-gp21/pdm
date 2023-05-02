import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../aplications/HomeScreen';
import BMI from '../../aplications/app01-bmi';
import Tasks from '../../aplications/app02-tasks';
import Forms from '../../aplications/app03-forms';
import Maps from '../../aplications/app04-maps';
import MaskText from '../../aplications/app05-masktext';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    
      <Stack.Navigator initalRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Overview' }}/>
        <Stack.Screen name="BMI" component={BMI} />
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="Forms" component={Forms} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="MaskText" component={MaskText} />
      </Stack.Navigator>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({})