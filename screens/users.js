import React from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

const Component_UserCatelog = (props)=>(
    <View>
      <ScrollView>
        <Text>Component UserCatelog </Text>
      </ScrollView>
    </View>
);

const Navigation_Users = StackNavigator(
  {
    Route_Landing: {
      screen: Component_UserCatelog
    }
  },{
    initialRouteName: 'Route_Landing',
    headerMode: 'none',

  }
)

export default Navigation_Users;
