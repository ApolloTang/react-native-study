import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={
            () => this.props.navigation.navigate('Chat', {user: 'Lucyxx'})
                                                        //^^^^^^^^^^^^^^
          }
          title="Chat with Lucy" />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Chat with Lucy',
  // };
  static navigationOptions = opts => ({
    title: `Chat with ${opts.navigation.state.params.user}`
  })
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default App;
