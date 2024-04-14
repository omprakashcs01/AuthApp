import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SignUpScreen = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center' , }}>
      <Image
        style={{width: 250, height: 250}}
        source={require('../../assets/SignUp.png')}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
