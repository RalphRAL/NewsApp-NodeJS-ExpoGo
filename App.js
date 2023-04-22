// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import GetNews from './src/Screens/GetNews';
import WebViewComponent from './src/Components/WebView';
import Landing from './src/Screens/Landing';
import Favorites from './src/Screens/Favorites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen name="Landing" component={Landing} options={({ route }) => ({
          tabBarButton: () => (
            route.name.includes('Terms') &&
            null
          ), tabBarStyle: { display: 'none' }
        })} />
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" color={tintColor} size={25} />
          )
        }} />
        <Tab.Screen name="Favorites" component={Favorites} options={{
          tabBarLabel: 'Bookmarks',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-bookmark" color={tintColor} size={25} />
          )
        }} />
        <Tab.Screen name='GetNews' component={GetNews} options={({ route }) => ({
          tabBarButton: () => (
            route.name.includes('GetNews') &&
            null
          ),
        })} />
        <Tab.Screen name='News' component={WebViewComponent} options={({ route }) => ({
          tabBarButton: () => (
            route.name.includes('News') &&
            null
          ),
        })} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs;