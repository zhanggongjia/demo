import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from "../navigators/NavigatorsUtil";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";



const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Page1,
      navigationOptions: {
        title: '工作台',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return <Icon name={'envelope-o'} size={26} color={tintColor} />;
        },
      },
    },
    Settings: {
      screen: Page2,
      navigationOptions: {
        title: '销售',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return <Icon name={'heart'} size={26} color={tintColor} />;
        },
      },
    },
    Settings2: {
      screen: Page3,
      navigationOptions: {
        title: '连接',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return <Entypo name={'emoji-happy'} size={25} color={tintColor} />;
        },
      },
    },
    Myset: {
      screen: Page4,
      navigationOptions: {
        title: '个人中心',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return <Entypo name={'user'} size={25} color={tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default class HomeScreen extends React.Component {
  render () {
    NavigationUtil.navigation = this.props.navigation;
    const BottomBar = createAppContainer(TabNavigator)
    return (
      <BottomBar />
    );
  }
}


