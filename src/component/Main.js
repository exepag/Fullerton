import React, {Component} from 'react';
import {StyleSheet,Text,View,ActivityIndicator,TouchableOpacity,Image} from 'react-native'; 
import axios from 'axios';
import {getToken} from '../global/util';

export default class Main extends Component {
	render () {
		return (
			<View style={{flex:1,backgroundColor:'purple'}}>
				<View>
					<Text></Text>
					<Text></Text>
				</View>

				<View>

				</View>

				<Image />
			</View>
		);
	}
}
