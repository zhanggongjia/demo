import React from 'react';
import { StyleSheet, View, Button, Text, StatusBar } from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Login extends React.Component {
  componentDidMount () {
    this.timer = setTimeout(() => {
      const { navigation } = this.props;
      navigation.navigate('HomePage');
    }, 150);
  }
  componentWillUnmount () {
    this.timer && clearTimeout(this.timer);
  }
  render () {
    const { navigation } = this.props;
    return (
      <>
        <View>
          <Text style={styles.sectionTitle}>Learn Login</Text>
          <Button
            title={'跳转到home'}
            onPress={() => navigation.navigate('HomePage')}></Button>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});
