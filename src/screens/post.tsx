import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {CompositeNavigationProp} from '@react-navigation/native';
import {RouterParamList, AppRouterParamList} from '../App';

const PostStack = createStackNavigator();

// TODO: migrate to navigation folder
export type PostRouterParamList = {
  PostScreen: undefined;
  PostDetail: undefined;
};

// screen
type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<PostRouterParamList, 'PostScreen'>,
  CompositeNavigationProp<
    StackNavigationProp<AppRouterParamList>,
    StackNavigationProp<RouterParamList>
  >
>;
export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const PostScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>POSTS SCREEN!</Text>
      <Button
        title="Go to post"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};

export const DetailScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>POSTS SCREEN DETAILS!</Text>
    </View>
  );
};

export const PostStackScreen = () => {
  return (
    <PostStack.Navigator screenOptions={{headerShown: true}}>
      <PostStack.Screen name="PostScreen" component={PostScreen} />
      <PostStack.Screen name="DetailScreen" component={DetailScreen} />
    </PostStack.Navigator>
  );
};
