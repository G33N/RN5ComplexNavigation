import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {DetailScreen} from './post';

const HomeStack = createStackNavigator();

export const HomeScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HOME!</Text>
      <Button
        title="Go to post"
        onPress={() => navigation.navigate('PostDetail')}
      />
      <Button
        title="Go to notification detail    "
        onPress={() => navigation.navigate('NotificationDetail')}
      />
    </View>
  );
};

export const NotificationDetailScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>NOTIFICATION DETAIL!</Text>
    </View>
  );
};

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: true}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="PostDetail" component={DetailScreen} />
      <HomeStack.Screen
        name="NotificationDetail"
        component={NotificationDetailScreen}
      />
    </HomeStack.Navigator>
  );
};
