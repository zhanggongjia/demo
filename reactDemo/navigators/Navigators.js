import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import Detail from '../pages/Detail';


const Logininit = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: '登陆',
    },
  },
});

const HomePageinit = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: '主页',
      header: null
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: '详情页面',
    },
  },
});

const SwitchNavigator = createSwitchNavigator({
  init: Logininit,
  main: HomePageinit,
});

export default SwitchNavigator;
