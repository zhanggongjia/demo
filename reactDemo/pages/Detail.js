import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Alert,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Detail extends React.Component {
  render () {
    console.log(this.props.navigation)
    return (
      <>
        <View>
          <Text style={styles.sectionTitle}>Learn Detail</Text>
          <Button style={{ color: 'red' }} title={'Alert Detail'} onPress={() => { Alert.alert('You tapped the button!') }}></Button>
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
