import React from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import {StackNavigator} from 'react-navigation';

const directive = {
  SimpleStack: {
    name: 'Stack Exaple',
    description: 'A card stack',
    // screen: SimpleStack
  },
  SimpleTabs: {
    name: 'Tabs Example',
    description: 'Tabs follow platform conventions',
    // screen: SimpleTabs
  }
};

const Item = ({name, description})=>{
  return (
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
  );
}

const List = ()=>{
  return (
    <View>
      {
        Object.keys(directive).map(
          ( key )=>{
            return <Item key={key} {...directive[key]}/>;
          }
        )
      }
    </View>
  );
};

class Catelog extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <List />
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create( {
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'hsl(0, 0%, 30%)',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'hsl(0, 50%, 50%)'
  },
  description: {
    fontSize: 10,
    color: 'hsl(0, 0%, 60%)'
  }
})

export default Catelog;



