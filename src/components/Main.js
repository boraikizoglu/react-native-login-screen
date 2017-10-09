// import React, { Component } from 'react';
// //import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
// import { View, Text } from 'react-native';

// import LoginScreen from './LoginScreen/LoginScreen';
// import SecondScreen from './LoginScreen/SecondScreen';
// import CreateAccount from './CreateAccount/CreateAccount';
// import ForgotPassword from './ForgotPassword/ForgotPassword';

// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation';

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
// 	};
//   render() {
// 		const { navigate } = this.props.navigation;
		
//     return (
//       <View>
//         <Text>Hello, Chat App!</Text>
			
//         <Button
//           onPress={() => navigate('Chat', { user: 'Lucy' })}
//           title="Chat with Lucy"
//         />
//       </View>
//     );
//   }
// }

// class ChatScreen extends React.Component {
//   // Nav options can be defined as a function of the screen's props:
//   static navigationOptions = ({ navigation }) => ({
//     title: `Chat with ${navigation.state.params.user}`,
//   });
//   render() {
//     // The screen's current route is passed in to `props.navigation.state`:
//     const { params } = this.props.navigation.state;
//     return (
//       <View>
//         <Text>Chat with {params.user}</Text>
//       </View>
//     );
//   }
// }

// export const SimpleApp = StackNavigator({
// 	Home: { screen: HomeScreen },
// 	Chat: { screen: ChatScreen },
// }
// );

// export default class App extends React.Component {
//   render() {
//     return <SimpleApp />;
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });



// import React from 'react';
// import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import { StackNavigator, DrawerNavigator } from 'react-navigation';

// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Home',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./images/logo.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     );
//   }
// }

// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Notifications',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./images/logo.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });

// const MyApp = DrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });

// export default class App extends React.Component {
//   render() {
//     return <MyApp initialRouteName='Notifications' />;
//   }
// }


// import React from 'react';
// import { Button, ScrollView } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import SampleText from './SampleText';

// const MyNavScreen = ({ navigation, banner }) => (
//   <ScrollView>
//     <SampleText>{banner}</SampleText>
//     <Button
//       onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
//       title="Go to a profile screen"
//     />
//     <Button
//       onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
//       title="Go to a photos screen"
//     />
//     <Button onPress={() => navigation.goBack(null)} title="Go back" />
//   </ScrollView>
// );

// const MyHomeScreen = ({ navigation }) => (
//   <MyNavScreen banner="Home Screen" navigation={navigation} />
// );
// MyHomeScreen.navigationOptions = {
//   title: 'Welcome',
// };

// const MyPhotosScreen = ({ navigation }) => (
//   <MyNavScreen
//     banner={`${navigation.state.params.name}'s Photos`}
//     navigation={navigation}
//   />
// );
// MyPhotosScreen.navigationOptions = {
//   title: 'Photos',
// };

// const MyProfileScreen = ({ navigation }) => (
//   <MyNavScreen
//     banner={`${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''}${navigation.state.params.name}'s Profile`}
//     navigation={navigation}
//   />
// );

// MyProfileScreen.navigationOptions = props => {
//   const { navigation } = props;
//   const { state, setParams } = navigation;
//   const { params } = state;
//   return {
//     headerTitle: `${params.name}'s Profile!`,
//     // Render a button on the right side of the header.
//     // When pressed switches the screen to edit mode.
//     headerRight: (
//       <Button
//         title={params.mode === 'edit' ? 'Done' : 'Edit'}
//         onPress={() =>
//           setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
//       />
//     ),
//   };
// };

// const SimpleStack = StackNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Profile: {
//     path: 'people/:name',
//     screen: MyProfileScreen,
//   },
//   Photos: {
//     path: 'photos/:name',
//     screen: MyPhotosScreen,
//   },
// });

// export default SimpleStack;

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Tabs } from './router';

class App extends React.Component {
  render() {
    return <Tabs />;
  }
}

export default App;



