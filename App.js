import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Routes from './src/route';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Routes />
			</Provider>
		);
	}
}
