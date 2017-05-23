import React from 'react';
import _ from 'lodash';

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

const User = ({user, navigation})=>{
  console.log(user)
  return (
    <TouchableOpacity
      onPress={()=>{
          console.log('user being press')
          navigation.navigate('TestScreen', {id:user.id} )
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

const Test = (props)=>{
  console.log('tttt: ', props.navigation.state.params.id)
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
    TestScreen: {
      screen: Test
    }
  },{
    initialRouteName: 'Route_Landing',
    headerMode: 'none',

  }
)

export default Navigation_Users;
