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

export default class Page4 extends React.Component {
  render () {
    return (
      <>
        <View>
          <Text style={styles.sectionTitle}>Learn Page4</Text>
          <Button style={{ color: 'red' }} title={'跳转到详情Detail'} onPress={() => { NavigatorsUtil.goPage('Detail', {}) }}></Button>
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
