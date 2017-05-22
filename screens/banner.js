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
      source={require('navStudy/assets/icons/react-navigation.png')}
      style={styles.image}
    />
    <Text style={styles.title}> React Navigation Demos </Text>
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 0%, 100%)',
    marginTop: Platform.OS === 'ios' ? 0 : -4
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    marginLeft: 4
  }
})
