import React from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import {StackNavigator} from 'react-navigation';

const Item = ()=>(
    <View style={styles.item}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.description}>descridasfdfadption</Text>
    </View>
);

const List = ()=>{
  const list = [];
  let i = 20;
  while (i--) {
    list.push(<Item key={i}/>);
  }
  return list;
};

class Catelog extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          {List()}
        </ScrollView>
      </View>
    )
  }
}

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



