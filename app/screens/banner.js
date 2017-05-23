import React from 'react';

import {
  StyleSheet,
  Platform,
  View,
  Image,
  Text
} from 'react-native';

const Banner = () => (
  <View style={styles.banner}>
    <Image
      source={require('navStudy/app/assets/icons/react-navigation.png')}
      style={styles.image}
    />
    <Text style={styles.title}> React Navigation Demos </Text>
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    paddingTop: Platform.OS === 'ios' ? 30 : 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsl(0, 10%, 100%)',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  image: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  title: {
    // borderWidth: 1,
    // borderColor: 'red',
    fontSize: 20,
    marginLeft: 4
  }
})
