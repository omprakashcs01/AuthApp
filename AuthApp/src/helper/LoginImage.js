import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginImage = () => {
  return (
    <View>
      <Image style = {{width: 400 , height: 300}} source={require('../../assets/Login.png')}/>
    </View>
  )
}


export default LoginImage

const styles = StyleSheet.create({})