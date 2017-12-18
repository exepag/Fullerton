import React, {Component} from 'react';
import {
View,
Text,
Image,
ActivityIndicator
} from 'react-native';
import axios from 'axios';
import {BASE_API_URL} from '../../global/util';
import {fetchDataDetails} from '../../action';
import {connect} from 'react-redux';
import numeral from 'numeral';



class Det extends Component {

	state = {
		product_name:'',
		price:'',
		image:''
	}


	componentDidMount() {
		const id = this.props.navigation.state.params.id
		this.props.dispatch(fetchDataDetails(id))
	}


	render() {

		return this.props.isFetching ? (

			<ActivityIndicator style={{marginTop:50}} size="large" />

		) : (

			<View style={{flex:1,backgroundColor:'gold'}} >

				<Image source={{uri:this.props.image}} style={{width:'100%',height:300,resizeMode:'contain'}} />

				<Text style={{textAlign:'center',marginTop:10,fontWeight:'bold',fontSize:20}} >
					{this.props.product_name}
				</Text>

				<Text style={{textAlign:'center',marginTop:20,fontWeight:'bold',fontSize:20}} >
					{this.props.description}
				</Text>

				<Text style={{textAlign:'center',color:'tomato',fontWeight:'bold',fontSize:20}} >
					Rp. {numeral(this.props.price).format('0,0.00')}
				</Text>

			</View>

		);

	}

}



const mapStateToProps = (state) => {
  console.log(state)

	return {
		isFetching: state.products_detail.isFetching,
		id: state.products_detail.id,
		image: state.products_detail.image,
		price: state.products_detail.price,
		product_id: state.products_detail.product_id,
		product_name: state.products_detail.product_name
	}
}


export default connect(mapStateToProps) (Det)



