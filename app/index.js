import React, { Component } from 'react';
import _ from 'lodash';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {StackNavigator, TabNavigator } from 'react-navigation';
import ComponentWithTabs from './screens/eg-tab-nav';


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
    title: `Title ${_.get(props, 'navigation.state.params.someParam', '*no params provided*')}`
  })
  render() { return (
    <View>
      <Text>This is content of Component Four</Text>
      <Text>{`this.props: \n ${JSON.stringify(this.props, null, 2)}`}</Text>
      <Text>{`this.props.keys: \n ${Object.keys(this.props)}`}</Text>
      <Text>{`screenProps: \n ${this.props.screenProps}`}</Text>
      <Text>{`navigation.keys: \n ${Object.keys(this.props.navigation)}`}</Text>
      <Button
        onPress={ ()=>this.props.navigation.navigate('StackTwo', {someParam: 'some_prop'}) }
        title="Navigate to Stack Two" />
    </View>
  ); }
};


class LandingComponent extends React.Component {
  static navigationOptions = props => ({
    // This will be override if it, navigationOptions is set in Navigator that call this component
    title: `Title ${_.get(props, 'navigation.state.params.someParam', '*no params provided*')}`
  })
  render() { return (
    <View>
      <Text>This is content of Landing Screen</Text>
      <Text>{`this.props: \n ${JSON.stringify(this.props, null, 2)}`}</Text>
      <Text>{`this.props.keys: \n ${Object.keys(this.props)}`}</Text>
      <Text>{`screenProps: \n ${JSON.stringify(this.props.screenProps, null, 4)}`}</Text>
      <Text>{`navigation.keys: \n ${Object.keys(this.props.navigation)}`}</Text>
      <Button
        onPress={ ()=>this.props.navigation.navigate('StackTwo', {someParam: 'some_prop'}) }
        title="Navigate to Stack Two" />
    </View>
  ); }
};

import Catelog from './screens/catelog';
import CatelogOfDemo from './screens/catelog-of-demo';
import {directive as directive_catelogOfDemo } from './screens/catelog-of-demo';
const RootNavigator = StackNavigator({
  StackTwo: { screen: ComponentWithTabs },
  StackThree: { screen: ComponentThree },
  StackFour: { screen: ComponentFour },
  CatelogExample: { screen: CatelogOfDemo },
  LandingScreen: {
    screen: LandingComponent,
    navigationOptions: props=>{
      _.set(props, `navigation.state.params.someParam`, '* this param is set in StackNavigotor *');
      console.log('This is navagationOptions defined in StackNavigator, it override the static navigationOptions defined in component:');
      console.log(`${JSON.stringify(props, null, 2)}`);
      return {
        title: `Title ${_.get(props, 'navigation.state.params.someParam', '* no params provided *')}`,
      }
    },
  },
  ...directive_catelogOfDemo
}, {
  // initialRouteName: 'LandingScreen',
  initialRouteName: 'CatelogExample',
});

const landingScreenAction = RootNavigator.router.getActionForPathAndParams('LandingScreen');
const landingScreenState = RootNavigator.router.getStateForAction(landingScreenAction);

console.log('yyyy: landingScreenAction: ', landingScreenAction);
console.log('yyyy: landingScreenState: ', landingScreenState);

const CatelogExampleAction = RootNavigator.router.getActionForPathAndParams('CatelogExample');
const CatelogExampleState = RootNavigator.router.getStateForAction(CatelogExampleAction);
console.log('yyyy: CatelogExampleAction: ', CatelogExampleAction);
console.log('yyyy: CatelogExampleState: ', CatelogExampleState);




class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('rootNavigationProps: ', this.rootNavigationProps)
  }


  render() {
    console.log('App: ', this.props)
    return (
      <RootNavigator
        ref={rootNavigationProps=>{ this.rootNavigationProps = rootNavigationProps }}
        screenProps={{'notes':`screenProps obj is provided in RootNavigator, and is available in current rendered component's props`}}
        otherProps={'otherProps is NOT available current screen, but is available in rootNavigationProps'}
        onNavigationStateChange={ (prevState, newState, action)=>{
          console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv')
          console.log('action: ', action);
          console.log('newState: ', newState);
          console.log('prevState: ', prevState);
          console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ')
        } }
        />
    )
  }
}
export default App;
