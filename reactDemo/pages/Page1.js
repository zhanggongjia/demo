import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
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
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import NavigatorsUtil from "../navigators/NavigatorsUtil";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";

class Pagetab extends React.Component {
  render () {
    return <>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style={styles.sectionTitle}>Learn {this.props.navigation.state.routeName}</Text>
          <Button
            onPress={() => { NavigatorsUtil.goPage('Detail', {}) }}
            title="Go To Detail！"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => { NavigatorsUtil.goPage('Detail', {}) }}
            title="Go To Detail！"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={() => { NavigatorsUtil.goPage('Detail', {}) }}
            title="Go To Detail！"
          />
          <Button
            onPress={() => { NavigatorsUtil.goPage('Detail', {}) }}
            title="Detail！"
            color="#841584"
          />
        </View>
      </View>
    </>

  }
}
const TopTabNavigator = createMaterialTopTabNavigator({
  TopPage1: {
    screen: Pagetab,
    navigationOptions: {
      title: 'tab1',
    }
  },
  TopPage2: {
    screen: Pagetab,
    navigationOptions: {
      title: 'tab2'
    }
  },
  TopPage3: {
    screen: Pagetab,
    navigationOptions: {
      title: 'tab3'
    }
  },
  TopPage4: {
    screen: Pagetab,
    navigationOptions: {
      title: 'tab4'
    }
  }
},
  {
    tabBarOptions: {
      tabStyle: {
        // minWidth: 10,
        // maxWidth: 20
      },
      // swipeEnabled: false, // 是否允许滑动切换tabs 默认是true
      animationEnabled: false, // 点击tab label切换tab时是否开启动画 默认为true
      upperCaseLabel: false,//是否使标签大写，默认为true
      scrollEnabled: false,//是否支持 选项卡滚动，默认false
      activeTintColor: '#4395ff',//label和icon的前景色 活跃状态下（选中）
      inactiveTintColor: '#333',//label和icon的前景色 活跃状态下（未选中）
      style: {
        backgroundColor: '#fff',//TabBar 的背景颜色
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: '#4395ff',
      },//标签指示器的样式
      labelStyle: {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 3,
      },//文字的样式
    },
  }
);
export default class Page1 extends React.Component {
  render () {
    const _tab = createAppContainer(TopTabNavigator)
    return <View style={{ flex: 1 }}>
      <Text style={styles.styleTop}>工作台</Text>
      <_tab />
    </View >
  }
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  styleTop: {
    height: 50,
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: '#4395ff',
    color: '#fff'
  },
  container: {
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
