import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/Register'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Auth" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

const isLoggedIn = true

function BottonNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                showLabel: false,
            }}
        >
            <Tab.Screen name="Feed" component={Feed} 
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({tintColor}) => <Icon name='home' size={30} color={tintColor} />
            }} />
            <Tab.Screen name="AddPhoto" component={AddPhoto} 
            options={{
                tabBarLabel: 'Add Picture',
                tabBarIcon: ({tintColor}) => <Icon name='camera' size={30} color={tintColor} />
            }} />
            <Tab.Screen name="Profile" component={MyStack} 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor: color}) => <Icon name='user' size={30} color={color} /> //se quiser mudar o nome do tintColor
            }} />
        </Tab.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottonNavigator />
    </NavigationContainer>
  );
}