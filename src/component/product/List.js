import React, {Component} from 'react';
import {
View,
Text,
Image,
TouchableOpacity
} from 'react-native';
import numeral from 'numeral';
//import {rgbhex} from 'rgb-hex';

const List = (data) => {
  console.log(data)

	const dataHasil = data.data
	const dataNavigation = data.navigation
	  console.log(dataHasil)
	  console.log(dataNavigation)


	return (
		<TouchableOpacity onPress={ () => dataNavigation.navigate('Det', {id:dataHasil.id} ) } >
		    <View style={{backgroundColor:'#fb8d33'}} >
			<View style={{flexDirection:'row'}} >

				<Image source={{uri:dataHasil.image}} style={{width:100,height:100,resizeMode:'contain'}} />

				<View style={{marginLeft:15}} >

					<Text style={{marginTop:20,fontSize:23,fontWeight:'500',color:'black'}}>
						{dataHasil.product_name}
					</Text>

					<View style={{flexDirection:'row'}}>
						<Text style={{fontSize:15,color:'white'}} >
							Rp. { numeral(dataHasil.price).format('0,0.00') }
						</Text>

						{
							dataHasil.price >= 15000000 ? (
		
								<Text style={{marginLeft:25,color:'red'}} >	15% Off	</Text>

							) : (

								<Text style={{marginLeft:25,color:'red'}} >	5% Off	</Text>

							)
						}
					</View>

				</View>


			</View>
		    </View>
		</TouchableOpacity>
	);

}


export default List



