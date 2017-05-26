import React from 'react';
import _ from 'lodash';

import {NavigationActions} from 'react-navigation';


import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';


const users = {
  '1234': {
    name: 'Apollo Tang',
    id: '1234'
  },
  '1111': {
    name: 'Miley Cyrus',
    id: '1111'
  }
};

const Action_navigateToUserById = (id)=>NavigationActions.navigate({
  routeName: 'userDetailScreen',
  params: {id}
});

const User = ({user, navigation})=>{
  return (
    <TouchableOpacity
      onPress={()=>{
          // navigation.navigate('TestScreen', {id:user.id} )
          navigation.dispatch(Action_navigateToUserById(user.id))
        }
      }
      >
        <View>
          <Text>{user.name}</Text>
        </View>
    </TouchableOpacity>
  )
};

const UserList = ({navigation}) => {
  return (
    <View>
      {
        Object.keys(users).map( userId => {
          return (
            <User
              key={userId}
              user={users[userId]}
              navigation={navigation}
            />
          )
        })
      }
    </View>
  )
};

const Component_UserCatelog = (props)=>(
    <View>
      <ScrollView>
        <UserList {...props}/>
      </ScrollView>
    </View>
);

const Component_userDetail = (props)=>{
  const id = props.navigation.state.params.id;
  return (
    <View><Text>{id}</Text></View>
  );
}

const Navigation_Users = StackNavigator(
  {
    Route_Landing: {
      screen: Component_UserCatelog
    },
    userDetailScreen: {
      screen: Component_userDetail
    }
  },{
    initialRouteName: 'Route_Landing',
    headerMode: 'none',

  }
)

export default Navigation_Users;
