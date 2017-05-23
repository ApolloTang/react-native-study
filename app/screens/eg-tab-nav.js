import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {TabNavigator} from 'react-navigation';


class Tab1 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'LabelTab1'
  }
  render() {
    return (
      <View>
        <Text>(Tab 1)</Text>
        <Text>{`this.props: \n ${JSON.stringify(this.props, null, 2)}`}</Text>
        <Button
          onPress={()=>this.props.navigation.navigate('StackFour', {someParam: '4'}) }
          title="Navigate to Stack Four" />
        <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
      </View>
    );
  }
}

class Tab2 extends React.Component {
  static navigationOptions = {
    tabBarLabel: (props)=>{
      console.log('xxxxx: ', props)
      return 'LabelTab2';
    }
  }
  render() {
    return (
      <View>
        <Text>(Tab 2)</Text>
        <Text>{`this.props: \n ${JSON.stringify(this.props, null, 2)}`}</Text>
        <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
      </View>
    );
  }
}

const ComponentWithTabs = TabNavigator({
  'Tab1': { screen: Tab1 },
  'Tab2_title': { screen: Tab2 },
}, {
  tabBarPosition: 'top'
});
ComponentWithTabs.navigationOptions = (props) => (
  { title: `TitleXX ${JSON.stringify(props.navigation.state.params)}` }
);

export default ComponentWithTabs;
