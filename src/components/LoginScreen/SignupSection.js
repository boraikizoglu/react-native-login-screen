import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableHighlight
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

export default class SignupSection extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bora: "bora",
			bodyText: 'This is not really a bird nest.'
		  };
		this._onPress = this._onPress.bind(this);
	}

	_onPress() {
		this.state.bora = "bora3"
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text} onPress={this._onPress} >Create Account</Text>
				<Text style={styles.text} onPress={() => Actions.forgotPassword()} >Forgot Password?</Text>
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: 0,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		color: 'rgba(0,0,0,0)',
		backgroundColor: 'transparent',
	},
});
