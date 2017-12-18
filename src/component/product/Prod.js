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

		);
	}
}



const mapStateToProps = (state) => {
	return {
		isFetching: state.products.isFetching,
		products: state.products.items
	}
}


export default connect(mapStateToProps) (Prod)



