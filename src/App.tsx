/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeStackScreen} from './screens/home';
import {PostStackScreen} from './screens/post';

const Tab = createBottomTabNavigator();

const linking = {
  prefixes: ['https://rn5complexnavigation.com', 'rn5complexnavigation://'],
  config: {
    screens: {
      Home: {
        path: 'home',
        screens: {
          PostDetail: {
            path: 'post-detail',
          },
        },
      },
      Post: 'post',
    },
  },
};

const App = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text> Loading deeplinking... </Text>}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Post" component={PostStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
