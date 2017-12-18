import React, {Component} from 'react';
import Main from './component/Main';
import Log from './component/Log';
import Reg from './component/Reg';
import Prod from './component/product/Prod';
import Det from './component/product/Det';
import {StackNavigator} from 'react-navigation';

const Router = StackNavigator ({
	Main:{screen:Main},
	Log:{screen:Log},
	Reg:{screen:Reg},
	Prod:{screen:Prod},
	Det:{screen:Det}
})

export default class Routes extends Component {
	render () {
		return <Router />
	}
}
