import React, { Component } from 'react';
import { Text } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


import LoginScreen from './LoginScreen/LoginScreen';
import CreateAccount from './CreateAccount/CreateAccount';

// class LoginScreen extends Component {
//     constructor(props) {
//         super(props);
//         console.log(this.props.navigation);
//     }

//     render() {
//         return <Text> fsdfa </Text>
//     }
// }

export const Tabs = DrawerNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            tabBarLabel: 'LoginScreen',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        }  
      },
      CreateAccount: {
        screen: CreateAccount,
        navigationOptions: {
            tabBarLabel: 'CreateAccount',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        }  
      },
});