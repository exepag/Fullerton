/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Featuring: Redux\n' +
    '-Powered by Vim-',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
	Fullerton
        </Text>
        <Text style={styles.instructions}>
	Toko Elektronik
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
	color: 'purple',
	fontWeight:'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
	fontSize: 25,
	fontWeight:'bold',
	color:'gray'
  },
});
