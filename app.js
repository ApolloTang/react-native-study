import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {StackNavigator, TabNavigator } from 'react-navigation';
import ComponentWithTabs from './screens/eg-tab-nav';


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'HomeScreen' };
  render() {
    return (
      <View>
        <Text>This is content of HomeScreen</Text>
        <Text>{`this.props: \n ${JSON.stringify(this.props, null, 2)}`}</Text>
        <Text>{`this.props.keys: \n ${Object.keys(this.props)}`}</Text>
        <Text>{`screenProps: \n ${this.props.screenProps}`}</Text>
        <Text>{`navigation.keys: \n ${Object.keys(this.props.navigation)}`}</Text>
        <Button
          onPress={ ()=>this.props.navigation.navigate('StackTwo', {someProp: 'someProp'}) }
          title="Navigate to Stack Two" />
      </View>
    );
  }
}

class ComponentThree extends React.Component {
  static navigationOptions = props => ({
    title: `Component 2 ${props.navigation.state.params.someProp}`
  })
  render() {
    return (
      <View>
        <Text>This is content of Component two</Text>
        <Text>{`this.props: \n ${JSON.stringify(this.props, null, 2)}`}</Text>
        <Button
          onPress={()=>this.props.navigation.navigate('StackThree', {someProp: '3'}) }
          title="Navigate to Stack Three" />
      </View>
    );
  }
};


class ComponentFour extends React.Component {
  static navigationOptions = props => ({
    title: `Title ${props.navigation.state.params.some_prop}`
  })
  render() { return (
    <View>
      <Text>This is content of Component Three</Text>
      <Button
        onPress={ ()=>this.props.navigation.navigate('StackTwo', {some_prop: 'some_prop'}) }
        title="Navigate to Stack Two" />
    </View>
  ); }
};


const RootNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  StackTwo: { screen: ComponentWithTabs },
  StackThree: { screen: ComponentThree },
  StackFour: { screen: ComponentFour },
});

class App extends Component {
  componentDidMount() {
    console.log('rootNav: ', this.rootNav)
  }
  render() {
    console.log('App: ', this.props)
    return (
      <RootNavigator
        ref={rootNav=>{
          this.rootNav = rootNav
          }} />
    )
  }
}
export default App;
