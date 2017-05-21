import React from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import SimpleTabs from './eg-tab-nav';

const directive = {
  // SimpleStack: {
  //   name: 'Stack Exaple',
  //   description: 'A card stack',
  //   screen: SimpleStack
  // },
  SimpleTabs: {
    name: 'Tabs Example',
    description: 'Tabs follow platform conventions',
    screen: SimpleTabs
  }
};

const Item = ({directive, navigation})=>{
  return (
    <TouchableOpacity
      onPress={()=>{
          const screen = _.get(directive, 'screen', void 0);
          console.log('press', screen);
          if (screen) {
            navigation.navigate( 'SimpleTabs', {someParam: 'some_prop'})
          }
        }}
      >
      <View style={styles.item}>
        <Text style={styles.title}>{directive.name}</Text>
        <Text style={styles.description}>{directive.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const List = ({navigation})=>{
  return (
    <View>
      {
        Object.keys(directive).map(
          ( key )=>{
            return <Item key={key} directive={directive[key]} navigation={navigation}/>;
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
          <List {...this.props}/>
        </ScrollView>
      </View>
    )
  }
};


const CatelogNav = StackNavigator(
  {
    Index_CatelogNav: {
      screen: Catelog
    },
    ...directive,
  },{
    initialRouteName: 'Index_CatelogNav',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card', // modal only availbale on ios, card is the default for both android and ios
  }
);

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

export default CatelogNav;



