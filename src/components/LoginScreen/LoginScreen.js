import React, { Component, PropTypes } from 'react';
import {Text} from 'react-native';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.navigation);
	}
	componentWillMount() {
		console.log(this.props.navigation);
	}
	render() {
		return (
			<Wallpaper>
				<Logo />
				<Form />
				<SignupSection  />
				<ButtonSubmit navigation={this.props.navigation} />
			</Wallpaper>
		);
	}
}
