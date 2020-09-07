import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const PostStack = createStackNavigator();

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
