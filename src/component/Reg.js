import React, {Component} from 'react';
import {
View,
Text,
TextInput,
ActivityIndicator,
TouchableOpacity,
Image
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {registerUser} from '../action';

class Reg extends Component {

	state = {
		email:'',
		password:'',
		messageSuccess:'',
		messageError:''
	}


	registerClickHandler() {
	//console.log(dataUser)
		const dataUser = {
			email: this.state.email,
			password: this.state.password
		}
		this.props.dispatch(registerUser(dataUser))
	}


	render() {

		const {isFetching , status} = this.props

		return (
			<View style={{flex:1,backgroundColor:'gainsboro'}} >

				{isFetching && ( <ActivityIndicator size="large" color="gray" /> ) }
				<Text>{status}</Text>


				<Text style={{marginLeft:40,marginTop:40,fontSize:25,fontWeight:'bold',color:'goldenrod'}} > 
					Registration Form
				</Text>

				<View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
					<Image source={require('./redux.png')} style={{resizeMode:'contain',width:'60%',height:'60%'}} />
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

						<TouchableOpacity style={{backgroundColor:'tomato',width:'40%',borderRadius:5}} 
						onPress={ () => {this.registerClickHandler()} } >

							<Text style={{textAlign:'center',color:'white',margin:10,fontWeight:'500',fontSize:20}} >
								REGISTER
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
		isFetching: state.user.isFetching,
		status: state.user.status
	}
}

export default connect(mapStateToProps) (Reg)





