import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {StackNavigator, TabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'HomeScreen' };
  render() {
    return (
      <View>
        <Text>This is content of HomeScreen</Text>
        <Button
          onPress={ ()=>this.props.navigation.navigate('StackTwo', {someProp: 'someProp'}) }
          title="Navigate to Stack Two" />
      </View>
    );
  }
}

class ComponentTwo extends React.Component {
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

class Tab1 extends React.Component {
  render() {
    return (
      <View>
        <Text>(Tab 1)</Text>
        <Text>{`this.props: \n ${JSON.stringify(this.props, null, 2)}`}</Text>
        <Button
          onPress={()=>this.props.navigation.navigate('StackFour', {someProp: '4'}) }
          title="Navigate to Stack Four" />
      </View>
    );
  }
}

class Tab2 extends React.Component {
  render() {
    return (
      <View>
        <Text>(Tab 2)</Text>
        <Text>{`this.props: \n ${JSON.stringify(this.props, null, 2)}`}</Text>
      </View>
    );
  }
}

const ComponentThree = TabNavigator({
  'Tab1': { screen: Tab1 },
  'Tab2_title': { screen: Tab2 },
});
ComponentThree.navigationOptions = (props) => (
  { title: `TitleXX ${JSON.stringify(props.navigation.state.params)}` }
)

const App = StackNavigator({
  Home: { screen: HomeScreen },
  StackTwo: { screen: ComponentTwo },
  StackThree: { screen: ComponentThree },
  StackFour: { screen: ComponentFour },
});

export default App;
