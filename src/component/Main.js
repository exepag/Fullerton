import React, {Component} from 'react';
import {StyleSheet,Text,View,ActivityIndicator,TouchableOpacity,Image} from 'react-native'; 
import axios from 'axios';
import {getToken} from '../global/util';

export default class Main extends Component {

	componentDidMount() {
		this.fetchToken()
	}

	fetchToken = async () => {
		const Token = await getToken()
		console.log(Token)
		if (Token) {
			this.props.navigation.navigate('Prod')
		}
	} 

	render () {
		return (
			<View style={{flex:1,backgroundColor:'indigo'}} >

				<View style={{marginTop:150}} >


					<Text style={{color:'gold',fontSize:70,fontWeight:'bold',textAlign:'center'}} >
						Fullerton
					</Text>


					<Text style={{color:'gainsboro',fontWeight:'bold',fontSize:30,textAlign:'center'}} >
						Electronics Online Shop
					</Text>


				</View>

				<View style={{flexDirection:'row',marginLeft:40,marginTop:125}} >


					<TouchableOpacity style={{backgroundColor:'springgreen',width:'40%',borderRadius:3}} 
					onPress={ () => this.props.navigation.navigate('Log') } >

						<Text style={{textAlign:'center',margin:10,color:'black',fontWeight:'500',fontSize:20}} >
							Login
						</Text>

					</TouchableOpacity>


					<TouchableOpacity style={{backgroundColor:'sandybrown',width:'40%',borderRadius:3,marginLeft:25}} 
					onPress={ () => this.props.navigation.navigate('Reg') } >

						<Text style={{textAlign:'center',margin:10,color:'black',fontWeight:'500',fontSize:20}} >
							Register
						</Text>

					</TouchableOpacity>


				</View>
				
				<View style={{flex:1/4,alignItems:'center',marginTop:40}} >
					<Text style={{color:'white',fontWeight:'500',fontSize:20}} >
						Available in:
					</Text>
				</View>

				<View style={{flex:1/4,alignItems:'center',marginTop:5}} >
					<Image source={require('./gizmodo.jpg')} style={{resizeMode:'contain',width:'150%',height:'150%'}} />
				</View>

			</View>
		);
	}


	static navigationOptions = { header:null }

}
