import React, {Component} from 'react';
import {
View,
Text,
TouchableOpacity,
ActivityIndicator,
Image,
ScrollView
} from 'react-native';
import axios from 'axios';
import {fetchProducts} from '../../action';
import {connect} from 'react-redux';
import List from './List';
import {LogoutHandler} from '../../action';


class Prod extends Component {

	state = {
		dataProducts:[],
		products:[],
		product_names:[],
		product_prices:[]
	}


	componentDidMount() {
		this.props.dispatch(fetchProducts())
	}


	render() {
	console.log(this.props.products)
		return (
		    <View style={{flex:1}} >

			{this.props.logout_status === 'Success Log Out!' &&
				(this.props.navigation.goBack())
			}

			<ScrollView>

				{
					this.props.products.length > 0 ? (

						this.props.products.map( (res,index) => <List navigation={this.props.navigation} 
						data={res} key={index} /> )

					) : (

						<ActivityIndicator size="large" style={{marginTop:50}} />

					)
				}

			</ScrollView>

			<TouchableOpacity style={{backgroundColor:'#f65c40'}} 
			onPress={ () => this.props.dispatch(LogoutHandler()) } >
				<Text style={{color:'gainsboro',fontSize:18,fontWeight:'600',textAlign:'center',marginTop:10,marginBottom:10}} >
					Log Out
				</Text>
			</TouchableOpacity>

		    </View>
		);
	}
}



const mapStateToProps = (state) => {
	return {
		logout_status: state.user.status,
		isFetching: state.products.isFetching,
		products: state.products.items
	}
}


export default connect(mapStateToProps) (Prod)



