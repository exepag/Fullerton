import React, {Component} from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
AsyncStorage,
Image
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../action';

class Log extends Component {

	state = {
		email:'',
		password:'',
		messageSuccess:'',
		messageError:''
	}


	loginClickHandler = () => {

		const data = {
			email: this.state.email,
			password: this.state.password
		}

		this.props.dispatch(loginUser(data))
	}


	render() {

		if(this.props.status === 'Login Success!' && this.props.token) {
			console.log('asdf')
			this.props.navigation.navigate('Prod')
		}

		return(
			<View style={{flex:1,backgroundColor:'gainsboro'}} >

				<Text style={{marginLeft:40,marginTop:40,fontSize:25,fontWeight:'bold',color:'goldenrod'}} >
					Login Form
				</Text>

				<View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
					<Image source={require('./googleplay.jpg')} style={{resizeMode:'contain',width:'50%',height:'50%'}} />
				</View>

				{this.state.messageSuccess !=='' && 
					<Text style={{color:'green'}} >
						{this.state.messageSuccess}
					</Text>
				}

				{this.state.messageError !=='' &&
					<Text style={{color:'red'}} >
						{this.state.messageError}
					</Text>
				}


				<View style={{marginLeft:40,marginTop:0}} >

					<TextInput style={{color:'black',width:'70%',fontSize:18}} placeholder="Email" 

					onChangeText={ (text) => this.setState( {email:text} ) } />


					<TextInput style={{color:'black',width:'70%',fontSize:18}} placeholder="Password" 

					onChangeText={ (text) => this.setState( {password:text} ) } secureTextEntry={true} />

				</View>


				<View style={{flex:1,backgroundColor:'indigo',marginTop:100}} >

					<View style={{flexDirection:'row',marginLeft:40,marginTop:50}} >

						<TouchableOpacity style={{backgroundColor:'limegreen',width:'40%',borderRadius:5}} 
						onPress={ () => {this.loginClickHandler()} } >

							<Text style={{textAlign:'center',color:'white',margin:10,fontWeight:'500',fontSize:20}} >
								LOGIN
							</Text>

						</TouchableOpacity>

						<TouchableOpacity style={{backgroundColor:'grey',width:'40%',borderRadius:5,marginLeft:25}} 
						onPress={ () => this.props.navigation.goBack() } >

							<Text style={{textAlign:'center',color:'white',margin:10,fontWeight:'500',fontSize:20}} >
								CANCEL
							</Text>

						</TouchableOpacity>

					</View>

				</View>

			</View>
		);
	}

}


const mapStateToProps = (state) => {
console.log(state)

	return {
		status: state.user.status,
		token: state.user.token,
		isFetching: state.user.isFetching
	}
}


export default connect(mapStateToProps) (Log)



