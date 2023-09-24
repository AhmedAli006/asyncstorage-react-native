import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';

import Signup from './screens/Signup';
import T1 from './screens/T1';
import Todo from './screens/Todo';
import Setting from './screens/settings';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="task4">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="task1" component={T1} />
        <Stack.Screen name="todo" component={Todo} />
        <Stack.Screen name="setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
