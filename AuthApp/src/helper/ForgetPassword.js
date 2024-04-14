import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ForgetPassword = () => {
  return (
    <View style = {{flexDirection: 'row' , justifyContent: 'flex-end' , marginRight: 30, marginTop: 5}}>
        <TouchableOpacity>
      <Text style = {{fontSize: 16 , color: 'grey'}}>ForgetPassword</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({})