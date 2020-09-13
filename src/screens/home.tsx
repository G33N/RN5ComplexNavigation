import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {CompositeNavigationProp} from '@react-navigation/native';
import {RouterParamList, AppRouterParamList} from '../App';
import {DetailScreen} from './post';

const HomeStack = createStackNavigator();
// TODO: migrate to navigation folder
export type HomeRouterParamList = {
  Home: undefined;
  PostDetail: undefined;
  NotificationDetail: undefined;
};
// screen
type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<HomeRouterParamList, 'Home'>,
  CompositeNavigationProp<
    StackNavigationProp<AppRouterParamList>,
    StackNavigationProp<RouterParamList>
  >
>;
export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen = ({navigation}: HomeScreenProps) => {
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
